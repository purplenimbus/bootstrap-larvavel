<?php

use Faker\Generator as Faker;

$factory->define(App\Job::class, function (Faker $faker) {
    return [
		'description' => $faker->text,
		'title' => $faker->word
    ];
});
