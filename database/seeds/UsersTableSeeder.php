<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
            	'email' => 'anthony.akpan@hotmail.com',
            	'password' => app('hash')->make('easier')
            ]
        ];

        foreach($users as $user){
        	$user = App\User::create($user);
        	
        	var_dump($user);
        }
    }
}
