using TestCicd.Web;

namespace TestCicd.Web.Tests;

public class GreeterTests
{
    [Fact]
    public void Greet_ReturnsGreeting_ForValidName()
    {
        var greeter = new Greeter();

        var result = greeter.Greet("Tina");

        Assert.Equal("Hello, Tina!", result);
    }

    [Fact]
    public void Greet_Throws_WhenNameIsEmpty()
    {
        var greeter = new Greeter();

        Assert.Throws<ArgumentException>(() => greeter.Greet(""));
    }
}
