# How to do this Project from scratch:

# 1. Setting up the DB
If you don't have a docker SQL Server set up, run this cmd.
(You need a docker.compose.yml)
```bash
docker-compose up -d
```
* We're using Azure Data Studio to check the db structure.

## Connecting in Azure Data Studio:
--> New Connection, then type:

    Connection Type: 
    Microsoft SQL Server
    Server = localhost, 1433
    Auth type = SQL login
    user = sa
    Password = Password_2_Change_4_Real_Cases_&

    rest things :) = Default

# 2. Create Web Api
## 2.1 Create WebAPI Project
/// MAke sure you have dotnet version 6!!!!!!
dotnet new globaljson --sdk-version 6.0.101
```bash
dotnet new webapi -o simpleAPI
```
* SimpleAPI will be the webapi Project Name!
```bash
cd simpleAPI
```
## 2.2 Add Entity Framework

```bash
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```
Check if this packages were added in the csproj file.
if not, add them manually, and run dotnet restore.

## 2.3 Create Context (Manually)
    You can copy the content from simpleAPI/Data/SimpleContext.cs for it!
    *OR*
    Create a directory called 'Data' inside simpleAPI 
    and create a file called SimpleContext.cs

    Remember to set up the right connection string in the app.settings

    Make the Context consistent by adding it as a dbContext in the program.cs file
    Seed data in the program.cs file
### Simple in the SimpleContext will be the database name

# 2.4 Create Tables
    In the Context, create a table by Creating a DbSet and passing a model.
    The Property name will be the table name.

    Create a model that you're going to use in the db

    Create a table in the Simple Context.

    Now you have to migrate!
    ### Run this command everytime you change somethingn on the context or in a model!!!!!
    ```bash
    dotnet ef migrations add {Name}
    ```
      ```bash
    dotnet ef database update
    ```


# 2.5 Create Controller:
    We need a Context in the controller.
    In order to access the db.


# 3. Create React APP
    ```bash
    npx create-react-app simpleclient
    ```
You need to add a CORS policy in the backend to connect:
  ```bash
    app.UseCors(opt => 
      opt.SetIsOriginAllowed(origin => true));
    ```
On react, you can fetch normally