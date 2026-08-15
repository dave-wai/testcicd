var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapGet("/healthz", () => Results.Ok(new { status = "Healthy" }));

// Client-side routes (e.g. /projects) have no matching static file, so fall
// back to index.html and let React Router handle it.
app.MapFallbackToFile("index.html");

app.Run();
