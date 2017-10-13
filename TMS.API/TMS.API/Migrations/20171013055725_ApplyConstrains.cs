using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TMS.API.Migrations
{
    public partial class ApplyConstrains : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestDetail_Requests_RequestId",
                table: "RequestDetail");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_User_UserIdId",
                table: "Requests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RequestDetail",
                table: "RequestDetail");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.RenameTable(
                name: "RequestDetail",
                newName: "RequestDetails");

            migrationBuilder.RenameIndex(
                name: "IX_RequestDetail_RequestId",
                table: "RequestDetails",
                newName: "IX_RequestDetails_RequestId");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "RequestDetails",
                type: "nvarchar(250)",
                maxLength: 250,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RequestDetails",
                table: "RequestDetails",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestDetails_Requests_RequestId",
                table: "RequestDetails",
                column: "RequestId",
                principalTable: "Requests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Users_UserIdId",
                table: "Requests",
                column: "UserIdId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RequestDetails_Requests_RequestId",
                table: "RequestDetails");

            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Users_UserIdId",
                table: "Requests");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RequestDetails",
                table: "RequestDetails");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.RenameTable(
                name: "RequestDetails",
                newName: "RequestDetail");

            migrationBuilder.RenameIndex(
                name: "IX_RequestDetails_RequestId",
                table: "RequestDetail",
                newName: "IX_RequestDetail_RequestId");

            migrationBuilder.AlterColumn<string>(
                name: "Description",
                table: "RequestDetail",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(250)",
                oldMaxLength: 250,
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_RequestDetail",
                table: "RequestDetail",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RequestDetail_Requests_RequestId",
                table: "RequestDetail",
                column: "RequestId",
                principalTable: "Requests",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_User_UserIdId",
                table: "Requests",
                column: "UserIdId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
