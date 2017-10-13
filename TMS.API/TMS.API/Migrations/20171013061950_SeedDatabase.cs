using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TMS.API.Migrations
{
    public partial class SeedDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Users(Name,Isactive) VALUES('sreng',1)");
            migrationBuilder.Sql("INSERT INTO Users(Name, Isactive) VALUES('sen', 1)");
            migrationBuilder.Sql("INSERT INTO Requests(Date, Description, UserId) VALUES(GETDATE(), 'TEST1', (SELECT Id from Users where Name = 'sreng'))");
            migrationBuilder.Sql("INSERT INTO Requests(Date, Description, UserId) VALUES(GETDATE(), 'TEST2', (SELECT Id from Users where Name = 'sen'))");
            migrationBuilder.Sql("INSERT INTO Requests(Date, Description, UserId) VALUES(GETDATE(), 'TEST3', (SELECT Id from Users where Name = 'sreng'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST1'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST1'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST2'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST2'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST3'))");
            migrationBuilder.Sql("INSERT INTO RequestDetails(Action, Category, Description, IsActive, RequestId) VALUES(1, 1, 'DESC1', 1, (SELECT Id FROM Requests WHERE Description = 'TEST3'))");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Requests WHERE Description IN('TEST1','TEST2','TEST3')");
            migrationBuilder.Sql("DELETE FROM Users WHERE Name IN('sreng','sen');");
        }
    }
}
