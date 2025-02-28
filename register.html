<%@ page import="java.sql.*" %>
<%@ include file="dbconfig.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #ffffff, #add8e6);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            background: linear-gradient(to bottom, #ffffff, #add8e6);
            border: 2px;
            width: 30%;
            max-width: 300px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 15px 20px;
            overflow-y: auto;
            height: 70vh;
            margin-top: 2%;
            text-align: center;
        }
        h1 {
            color: #333;
        }
        form {
            margin-top: 20px;
        }
        input[type="text"],
        input[type="password"] {
            padding: 10px;
            width: 80%;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        input[type="submit"] {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        .message {
            margin-top: 20px;
            color: green;
        }
        .error {
            color: red;
        }
    </style>
    <script>
        function validateForm() {
            const username = document.forms["registerForm"]["username"].value;
            const firstname = document.forms["registerForm"]["firstname"].value;
            const lastname = document.forms["registerForm"]["lastname"].value;
            const password = document.forms["registerForm"]["password"].value;
            const confirmPassword = document.forms["registerForm"]["confirmPassword"].value;

            const nameRegex = /^[A-Za-z]{3,}$/;
            const passwordRegex = /^[A-Za-z0-9.@:]{4,}$/;

            if (!nameRegex.test(firstname) || !nameRegex.test(lastname)) {
                alert("First and last names must contain only letters and be at least 3 characters long.");
                return false;
            }

            if (!passwordRegex.test(password)) {
                alert("Password must be at least 4 characters long and can only contain letters, numbers, and . @ : characters.");
                return false;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return false;
            }

            return true;
        }
    </script>
</head>
<body>
       <button style="background-color: #ffffff; color: #000000;" type="button" class="btnb" onclick="window.history.back();">Back</button>
 
    <div class="container">
        <h1>Register</h1>
        <form name="registerForm" method="post" onsubmit="return validateForm();">
            <input type="text" name="username" placeholder="Username" required><br>
            <input type="text" name="firstname" placeholder="First Name" required><br>
            <input type="text" name="lastname" placeholder="Last Name" required><br>
            <input type="password" name="password" placeholder="Password" required><br>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required><br>
            <input type="submit" value="Sign Up">
        </form>

        <p>Already have an account? <a href="login.jsp">Login</a></p>

        <% if (request.getMethod().equals("POST")) {
            String username = request.getParameter("username");
            String firstname = request.getParameter("firstname");
            String lastname = request.getParameter("lastname");
            String password = request.getParameter("password");

            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection conn = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

                String checkSql = "SELECT COUNT(*) FROM user WHERE username = ?";
                PreparedStatement checkStmt = conn.prepareStatement(checkSql);
                checkStmt.setString(1, username);
                ResultSet rs = checkStmt.executeQuery();
                rs.next();

                if (rs.getInt(1) > 0) {
                    out.println("<p class='error'>Username already exists. Please choose another one.</p>");
                } else {
                    long accountNumber = (long)(1000000000000L + Math.random() * 999999999L);

                    String insertSql = "INSERT INTO user (username, firstname, lastname, password, account) VALUES (?, ?, ?, ?, ?)";
                    PreparedStatement insertStmt = conn.prepareStatement(insertSql);
                    insertStmt.setString(1, username);
                    insertStmt.setString(2, firstname);
                    insertStmt.setString(3, lastname);
                    insertStmt.setString(4, password);
                    insertStmt.setLong(5, accountNumber);
                    insertStmt.executeUpdate();

                    response.sendRedirect("login.jsp");
                    insertStmt.close();
                }
                checkStmt.close();
                conn.close();
            } catch (Exception e) {
                out.println("<p class='error'>Error: " + e.getMessage() + "</p>");
            }
        } %>
    </div>
</body>
</html>
