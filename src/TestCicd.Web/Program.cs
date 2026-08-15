using TestCicd.Web;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSingleton<IGreeter, Greeter>();

var app = builder.Build();

app.MapGet("/", () => "Hello World V3");
app.MapGet("/healthz", () => Results.Ok(new { status = "Healthy" }));

app.Run();

public partial class Program { }
