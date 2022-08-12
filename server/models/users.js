import mongoose from "mongoose"
const { Schema } = mongoose

const userSchema = new Schema({
	name: String,
	email: String,
	encryptedPassword: String,
	userPhoto: String,
	joinDate: String,
	lastAccessed: String,
	lastAccessedLoc: String,
	activity: [
		{
			date: String,
			deviceType: String,
			location: String,
		},
	],
	createdEvents: [
		{
			isTrue: boolean,
			events: [],
		},
	],
	createdOrganizers: [
		{
			isTrue: boolean,
			events: [],
		},
	],
	createdVendors: [
		{
			isTrue: boolean,
			events: [],
		},
	],
	followedOrganizers: [
		{
			isTrue: boolean,
			events: [],
		},
	],
	favoritedVendors: [
		{
			isTrue: boolean,
			events: [],
		},
	],
	subscribedEvents: [
		{
			isTrue: boolean,
			events: [
				{
					id: Number,
					activity: [
						{
							response: String,
							date: String,
						},
					],
				},
			],
		},
	],
})
