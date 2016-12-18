##Task 5



For demonstration your work you can create sh/bash/<b>bat</b>/etc file for running commands or other way after an agreement with your mentor.
 
 
 
1) Create a dump of DB as an archive in .gz format.



2) Design: Create a Posts DB with instances: authors/articles/comments/tags and others. Try to practice CRUD operation.



3) Make your DB as faster as need but not more (create Indexes).



4) There are documents for each student (student_id) across a variety of classes (class_id). Your task is to calculate the class with the best average student performance. This involves calculating an average for each student in each class of all non-quiz assessments and then averaging those numbers to get a class average.



Link: https://www.dropbox.com/s/hqs1n2318i5wy9q/grades.json?dl=0



5) Replication for DB above (point 4).



<hr>

 
To view an example of CRUD operations:

+ add path to MongoDB bin folder to system environmental variables
+ open cmd in a directory and run CRUD.bat with parameters

Avaliable commands for CRUD.bat:

1. create
2. read
3. update
4. delete

Usage of CRUD.bat:  
crud \<command\> \<db_user\> \<db_password\> (ex.: crud read user1 password1)
  
Command for creating a dump:
  
db_dump \<db_user\> \<db_password\>

For calculating the class with the best average student performance run the next command (you should restore a collection; see link in the 4th point):  
calc
