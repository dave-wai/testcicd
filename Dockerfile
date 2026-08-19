# syntax=docker/dockerfile:1

# ---- 1. Build the React client straight into wwwroot ----
FROM node:22-alpine AS client-build
WORKDIR /src/ClientApp
COPY src/TestCicd.Web/ClientApp/package*.json ./
RUN npm ci
COPY src/TestCicd.Web/ClientApp/ ./
RUN npm run build

# ---- 2. Restore, build and publish the .NET app ----
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS publish
WORKDIR /src
COPY src/TestCicd.Web/TestCicd.Web.csproj src/TestCicd.Web/
RUN dotnet restore src/TestCicd.Web/TestCicd.Web.csproj
COPY src/TestCicd.Web/ src/TestCicd.Web/
# Overwrite the placeholder wwwroot with the built React assets before publish.
COPY --from=client-build /src/wwwroot src/TestCicd.Web/wwwroot
RUN dotnet publish src/TestCicd.Web/TestCicd.Web.csproj -c Release -o /app/publish --no-restore

# ---- 3. Runtime image ----
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "TestCicd.Web.dll"]
