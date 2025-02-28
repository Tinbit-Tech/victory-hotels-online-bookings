<%@ page import="java.sql.*" %>
<%@ include file="dbconfig.jsp" %>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(to bottom, #ffffff, #add8e6); /* Blue-white gradient */
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            background: linear-gradient(to bottom, #ffffff, #add8e6); /* Transparent white background */
            border: 2px solid #ccc;
            width: 30%;
            max-width: 300px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 15px 20px;
            text-align: center;
        }
        h1 {
            color: #333;
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
        a {
            display: block;
            margin-top: 20px;
            color: #007bff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .error {
            color: red;
        }
    </style>
</head>
<body>
       <button style="background-color: #ffffff; color: #000000;" type="button" class="btnb" onclick="window.history.back();">Back</button>
    <div class="container">
        
        <h1>Login</h1>
        <form method="post" onsubmit="return validateLoginForm()">
            <input type="text" name="username" placeholder="Username" required pattern="[A-Za-z0-9_.@-]+" title="Username can contain letters, numbers, and the characters (_ . @ -)"><br>
            <input type="password" name="password" placeholder="Password" required pattern=".{4,}" title="Password must be at least 4 characters long"><br>
            <input type="submit" value="Login">
        </form>
        <script>
            function validateLoginForm() {
                const username = document.querySelector('[name="username"]').value;
                const password = document.querySelector('[name="password"]').value;

                // Username validation (only letters, numbers, and allowed symbols)
                const usernameRegex = /^[A-Za-z0-9_.@-]+$/;
                if (!usernameRegex.test(username)) {
                    alert("Username can only contain letters, numbers, and the characters (_ . @ -).");
                    return false;
                }

                // Password validation (minimum 4 characters)
                if (password.length < 4) {
                    alert("Password must be at least 4 characters long.");
                    return false;
                }

                return true; // Allow form submission
            }
        </script>
        <p>Don't have an account? <a href="register.jsp">Register</a></p>

        <%
    if (request.getMethod().equalsIgnoreCase("POST")) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try {
            // Establish database connection
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);

            // Check if the user is locked
            String checkLockSql = "SELECT locked_until, attempt_count FROM login_attempts WHERE username = ?";
            PreparedStatement checkLockStmt = conn.prepareStatement(checkLockSql);
            checkLockStmt.setString(1, username);
            ResultSet lockRs = checkLockStmt.executeQuery();

            boolean isLocked = false;
            Timestamp lockedUntil = null;
            int attemptCount = 0;

            if (lockRs.next()) {
                lockedUntil = lockRs.getTimestamp("locked_until");
                attemptCount = lockRs.getInt("attempt_count");

                if (lockedUntil != null && lockedUntil.after(new Timestamp(System.currentTimeMillis()))) {
                    isLocked = true;
                }
            }

            if (isLocked) {
                out.println("<p class='error'>Your account is locked. Please try again after: " + lockedUntil + "</p>");
            } else {
                // Verify credentials
                String sql = "SELECT * FROM user WHERE username = ? AND password = ?";
                PreparedStatement stmt = conn.prepareStatement(sql);
                stmt.setString(1, username);
                stmt.setString(2, password);
                ResultSet rs = stmt.executeQuery();

                if (rs.next()) {
                    // Login successful
                    session.setAttribute("username", username);

                    // Reset login attempts
                    String resetAttemptsSql = "DELETE FROM login_attempts WHERE username = ?";
                    PreparedStatement resetStmt = conn.prepareStatement(resetAttemptsSql);
                    resetStmt.setString(1, username);
                    resetStmt.executeUpdate();

                    // Redirect based on role
                    String role = rs.getString("role");
                    if ("admin".equalsIgnoreCase(role)) {
                        response.sendRedirect("./roomadmin/adminDashboard.jsp");
                    } else if ("manager".equalsIgnoreCase(role)) {
                        response.sendRedirect("./manager/Manager_dashbord.jsp");
                    } else {
                        response.sendRedirect("startBooking.jsp");
                    }
                } else {
                    // Invalid credentials
                    if (attemptCount >= 2) {
                        // Lock account for 5 hours
                        String lockAccountSql = "INSERT INTO login_attempts (username, attempt_count, locked_until) VALUES (?, ?, ?) " +
                                                "ON DUPLICATE KEY UPDATE attempt_count = ?, locked_until = ?";
                        PreparedStatement lockStmt = conn.prepareStatement(lockAccountSql);
                        Timestamp lockTime = new Timestamp(System.currentTimeMillis() + 5 * 60 * 60 * 1000); // 5 hours
                        lockStmt.setString(1, username);
                        lockStmt.setInt(2, attemptCount + 1);
                        lockStmt.setTimestamp(3, lockTime);
                        lockStmt.setInt(4, attemptCount + 1);
                        lockStmt.setTimestamp(5, lockTime);
                        lockStmt.executeUpdate();

                        out.println("<p class='error'>Too many failed attempts. Your account is locked for 5 hours.</p>");
                    } else {
                        // Increment attempt count
                        String incrementAttemptSql = "INSERT INTO login_attempts (username, attempt_count) VALUES (?, ?) " +
                                                     "ON DUPLICATE KEY UPDATE attempt_count = attempt_count + 1";
                        PreparedStatement incrementStmt = conn.prepareStatement(incrementAttemptSql);
                        incrementStmt.setString(1, username);
                        incrementStmt.setInt(2, 1);
                        incrementStmt.executeUpdate();

                        out.println("<p class='error'>Invalid username or password!</p>");
                    }
                }

                stmt.close();
            }

            checkLockStmt.close();
            conn.close();
        } catch (Exception e) {
            out.println("<p class='error'>Error: " + e.getMessage() + "</p>");
        }
    }
%>

    </div>
</body>
</html>
