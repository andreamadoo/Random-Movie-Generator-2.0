using Microsoft.EntityFrameworkCore;

using movieAPI.Models;
namespace movieAPI.Data;

  public class SimpleContext : DbContext
    {
        // public DbSet<Address> Address { get; set; }
        // public DbSet<Customer> Customers { get; set; }

        // Create a Table:
        // public DbSet<Model> TableName { get; set; }
          public SimpleContext(DbContextOptions<SimpleContext> options)
      : base(options)
  {
  }
        public DbSet<Movie>? TableName { get; set; }
        
        
    }