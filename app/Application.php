<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid as Uuid;

class Application extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'applicant_id',
        'job_id',
        'status_id',
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
    function status(){
        return $this->belongsTo('App\ApplicationStatus','status_id');
   
}
