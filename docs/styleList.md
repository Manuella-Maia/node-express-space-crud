        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-image: radial-gradient( circle farthest-corner at 17.6% 50.7%,  rgba(25,0,184,1) 0%, rgba(0,0,0,1) 90% );
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.9);
            padding: 10px 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
            z-index: 10;
        }

        .menu a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
            padding: 8px 14px;
            border-radius: 6px;
            transition: background 0.2s, color 0.2s;
        }

        .menu a:hover {
            background: rgba(102, 126, 234, 0.15);
            color: #2b2b2b;
        }

        .container {
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            width: 100%;
            max-width: 900px;
            margin-top: 60px;
        }

        h1 {
            color: #333;
            margin-bottom: 24px;
            text-align: center;
        }

        .table-wrapper {
            overflow-x: auto;
            margin-top: 20px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        th, td {
            padding: 12px 10px;
            border: 1px solid #ddd;
            text-align: left;
            font-size: 14px;
        }

        th {
            background: #667eea;
            color: white;
        }

        tr:nth-child(even) {
            background: #f9f9f9;
        }

        .button-small {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            min-width: 80px;
        }

        .button-small.edit {
            background: #2d8cff;
            color: white;
        }

        .button-small.delete {
            background: #e14c4c;
            color: white;
        }

        .actions {
            display: flex;
            gap: 10px;
            justify-content: center;
        }

        .hidden {
            display: none;
        }

        .edit-panel {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            background: #fafafa;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .edit-panel h2 {
            margin-bottom: 16px;
            font-size: 20px;
            color: #333;
            text-align: center;
        }

        .form-group {
            margin-bottom: 12px;
        }

        .form-group label {
            display: block;
            margin-bottom: 4px;
            font-weight: bold;
            color: #555;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }

        .actions {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 16px;
        }

        .button-small {
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            min-width: 80px;
        }

        .info {
            margin-top: 10px;
            font-size: 14px;
            color: #555;
        }