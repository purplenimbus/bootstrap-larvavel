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
        $users = [[
        	'username' => 'test1',
        	'email' => 'test1@mytest.com',
        	'password' => app('hash')->make('test1@mytest.com')
        ],[
        	'username' => 'test2',
        	'email' => 'test2@mytest.com',
        	'password' => app('hash')->make('test2@mytest.com')
        ]];

        foreach($users as $user){
        	$user = App\User::create($user);
        	
        	var_dump($user);
        }
    }
}
