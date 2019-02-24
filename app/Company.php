<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid as Uuid;

class Company extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id',
        'name',
		'description',
		'meta',
    ];

    /**
     * Cast meta property to array
     *
     * @var array
     */
    protected $casts = [
        'meta' => 'object',
    ];

    /**
	 *  Setup model event hooks
	 */
	public static function boot()
	{
		parent::boot();
		self::creating(function ($model) {
			$model->uuid = (string) Uuid::generate(4);
		});
	}

	/* Relationships */
	function category(){
		return $this->belongsTo('App\CompanyCategory');
	}
}
