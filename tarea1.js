//Tarea 1 _ Hernández Juárez Carlos

//Functions
function hour(err, time, timess, cb){
	t = time;
	setTimeout(function(){
		tim=Date.now();
		if(tim%2 == 0)
		{
			timess=tim;
		}
		else
		{
			timess="(:";
		}
		console.log(timess);
		return cb(null, t, timess);
	}, t);
	t=time+1000;
}
function fibonacci(err, ant2, ant1, cb){
	num3 = ant2+ant1;
	return cb(null, ant1, num3);
}

//Fibonacci
fibonacci (null, 0, 1,
	function (err, ant2, ant1)
	{
		return fibonacci(err, ant2, ant1,
		function(err, ant2, ant1)
		{
			return fibonacci(err, ant2, ant1,
			function(err, ant2, ant1)
			{
				return fibonacci(err, ant2, ant1,
				function(err, ant2, ant1)
				{
					return fibonacci(err, ant2, ant1,
					function(err, ant2, ant1)
					{
						return fibonacci(err, ant2, ant1,
						function(err, ant2, ant1)
						{
							return fibonacci(err, ant2, ant1,
							function(err, ant2, ant1)
							{
								return fibonacci(err, ant2, ant1,
								function(err, ant2, ant1)
								{
									console.log(num3);
									console.log("---------------");
								});
							});
						});
					});
				});
			});	
		});
	});
//UNIX Hour
hour (null, 1000, 0,
	function (err, time, timess)
	{
		return hour(err, time, timess,
		function(err, time, timess)
		{
			return hour(err, time, timess,
			function(err, time, timess)
			{
				return hour(err, time, timess,
				function(err, time, timess)
				{
					return hour(err, time, timess,
					function(err, time, timess)
					{
						return hour(err, time, timess,
						function(err, time, timess)
						{
							return hour(err, time, timess,
							function(err, time, timess)
							{
								return hour(err, time, timess,
								function(err, time, timess)
								{
									return;
								});
							});
						});
					});
				});
			});	
		});
	});