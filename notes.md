SELECT id,received_timestamp from emails WHERE received_timestamp < date('now', '-10 day');

SELECT datetime(1745616138717, 'unixepoch', 'localtime');