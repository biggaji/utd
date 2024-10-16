import users from './users.json' with {type: 'json'};

if (import.meta.main) {
	console.log(users);
}
