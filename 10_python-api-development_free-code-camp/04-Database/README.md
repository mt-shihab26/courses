# Database

## Why we need Schema
* It's a pain to get all the values from the body 
* The client can send whatever data they want
* The data isn't getting validated
* We ultimately want to force the clint to send data in a Schema that we expect

## Databases
* Database is a collection of organized data that can be easily accessed and managed
* DBMS
    * We don't work or interact with databases directly.
    * Insteand we make use of a software referred to as a Database Management System (DBMS)
* Relational
    * MySQL
    * PostgreSQL
    * Oracle
    * SQL Server
* NoSQL
    * MongoDB
    * DynamoDB
    * Oracle
    * SQL Server
* SQL
    * Structured Query Language (SQL) - Language used to communicate with RDBMS
* PostgreSQL
    * Each instance of postgres can be carved into multiple separate databases
* By default every Postgres installation comes with one database already created called "PostgreSQL"
* This is important because Postgres requires you to specify the name of a database to make a connection. So there nedds to always be one database.
* Tables
    * A table represents a subject or event in an application
* Columns vs Rows
    * A table is made up of columns and rows
    * Each Column represents a different attribute
    * Each row represents a different entry in the table
* PostgreSQL DataTypes
    * Databases habe datatypes just like any programming language
* Primary Key
    * Is a column or group of columns that uniquely identifies each row in a table
    * Table can have one and only one primary key
    * Each Entry must be Duplicates!!!
    * The Primary key does not have to be the ID column always. it's up to you to decide which column uniquely defines each record.
    * In this eample, since an eamil can only be registered once, the email column can also be used as the primary key.
* Unique Constraints
    * A UNIQUE constraint can be applied to any column to make sure every record has unique value for that column
* Null Constraints
    * By default, when adding a new entry to a database, any column can be left blank. When a column is left blank, it has a null value
    * If you need column to be properly filled in to create a new record, a NOT NULL constraint can be added to the column to ensure that the column is never left blank.
