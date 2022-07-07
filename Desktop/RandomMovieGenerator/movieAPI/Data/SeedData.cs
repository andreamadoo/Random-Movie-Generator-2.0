using Microsoft.EntityFrameworkCore;
namespace movieAPI.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new SimpleContext(
        serviceProvider.GetRequiredService<
        DbContextOptions<SimpleContext>>()))
        {
            // Look for any movies.
            if (context.TableName.Any()) { return; }
            context.TableName.AddRange(
            new Models.Movie
            {
                Name = "Godfather",
                Genre = "Drama",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
            }
            
            ,

            new Models.Movie
            {
                Name = "Harry Potter",
                Genre = "Fantasy",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg"
            }
            ,
            new Models.Movie
            {
                Name = "The Notebook",
                Genre = "Romance",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg"
            }
            
            ,
            new Models.Movie
            {
                Name = "Lord Of The Rings",
                Genre = "Fantasy",
                ImageUrl = "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
            }
            // and more
            );
            context.SaveChanges();
        }
    }
}