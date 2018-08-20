<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'employees';

    protected $fillable = [
	    'employeeNumber', 
	    'lastName',
	    'firstName',
	    'extension',
	    'email',
	    'officeCode',
	    'reportsTo',
	    'jobTitle'
	]
}
