<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'payments';

    protected $fillable = [
	    'customerNumber', 
	    'checkNumber',
	    'paymentDate',
	    'amount'
	]
}
