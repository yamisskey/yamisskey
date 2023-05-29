import { IdSchema } from './schemas/id.js';
import {
	packedUserLiteSchema,
	packedUserDetailedNotMeOnlySchema,
	packedMeDetailedOnlySchema,
	packedUserDetailedNotMeSchema,
	packedMeDetailedSchema,
	packedUserDetailedSchema,
	packedUserSchema,
} from './schemas/user.js';
import {
	packedNotificationSchema,
	packedNotificationStrictSchema,
} from './schemas/notification.js';
import { packedNoteSchema } from './schemas/note.js';
import { packedUserListSchema } from './schemas/user-list.js';
import { packedAppSchema } from './schemas/app.js';
import { packedDriveFileSchema } from './schemas/drive-file.js';
import { packedDriveFolderSchema } from './schemas/drive-folder.js';
import { packedFollowingSchema } from './schemas/following.js';
import { packedMutingSchema } from './schemas/muting.js';
import { packedRenoteMutingSchema } from './schemas/renote-muting.js';
import { packedBlockingSchema } from './schemas/blocking.js';
import { packedNoteReactionSchema } from './schemas/note-reaction.js';
import { packedHashtagSchema } from './schemas/hashtag.js';
import { packedPageSchema } from './schemas/page.js';
import { packedNoteFavoriteSchema } from './schemas/note-favorite.js';
import { packedChannelSchema } from './schemas/channel.js';
import { packedAntennaSchema } from './schemas/antenna.js';
import { packedClipSchema } from './schemas/clip.js';
import { packedFederationInstanceSchema } from './schemas/federation-instance.js';
import { packedQueueCountSchema } from './schemas/queue.js';
import { packedGalleryPostSchema } from './schemas/gallery-post.js';
import { packedEmojiDetailedSchema, packedEmojiSimpleSchema } from './schemas/emoji.js';
import { packedFlashSchema } from './schemas/flash.js';
import { packedAdSchema } from './schemas/ad.js';
import { packedAnnouncementSchema } from './schemas/announcement.js';
import { packedRelaySchema } from './schemas/relay.js';
import { packedAbuseUserReportSchema } from './schemas/abuse-user-report.js';
import {
	packedRoleSchema,
	packedRoleAssignSchema,
	packedRolePolicySchema,
	packedRoleCondFormulaSchema,
} from './schemas/role.js';
import {
	InstanceMetaSharedSchema,
	InstanceMetaAdminSchema,
} from './schemas/instance-meta.js';
import {
	ServerInfoSchema,
	ServerInfoAdminSchema,
} from './schemas/server-info.js';
import { packedModerationLogSchema } from './schemas/moderation-log.js';
import { Error, ApiError } from './schemas/error.js';
import type { JSONSchema7, JSONSchema7Definition, GetDef, GetRefs, GetKeys, UnionToArray } from 'schema-type';

export const refs = {
	Id: IdSchema,

	UserLite: packedUserLiteSchema,
	UserDetailedNotMeOnly: packedUserDetailedNotMeOnlySchema,
	MeDetailedOnly: packedMeDetailedOnlySchema,
	UserDetailedNotMe: packedUserDetailedNotMeSchema,
	MeDetailed: packedMeDetailedSchema,
	UserDetailed: packedUserDetailedSchema,
	User: packedUserSchema,

	UserList: packedUserListSchema,
	App: packedAppSchema,
	Note: packedNoteSchema,
	NoteReaction: packedNoteReactionSchema,
	NoteFavorite: packedNoteFavoriteSchema,
	Notification: packedNotificationSchema,
	NotificationStrict: packedNotificationStrictSchema,
	DriveFile: packedDriveFileSchema,
	DriveFolder: packedDriveFolderSchema,
	Following: packedFollowingSchema,
	Muting: packedMutingSchema,
	RenoteMuting: packedRenoteMutingSchema,
	Blocking: packedBlockingSchema,
	Hashtag: packedHashtagSchema,
	Page: packedPageSchema,
	Channel: packedChannelSchema,
	QueueCount: packedQueueCountSchema,
	Antenna: packedAntennaSchema,
	Clip: packedClipSchema,
	FederationInstance: packedFederationInstanceSchema,
	GalleryPost: packedGalleryPostSchema,
	EmojiSimple: packedEmojiSimpleSchema,
	EmojiDetailed: packedEmojiDetailedSchema,
	Flash: packedFlashSchema,
	Ad: packedAdSchema,
	Announcement: packedAnnouncementSchema,
	Relay: packedRelaySchema,
	Role: packedRoleSchema,
	RoleAssign: packedRoleAssignSchema,
	RolePolicy: packedRolePolicySchema,
	RoleCondFormula: packedRoleCondFormulaSchema,
	AbuseUserReport: packedAbuseUserReportSchema,
	InstanceMetaShared: InstanceMetaSharedSchema,
	InstanceMetaAdmin: InstanceMetaAdminSchema,
	ServerInfo: ServerInfoSchema,
	ServerInfoAdmin: ServerInfoAdminSchema,
	ModerationLog: packedModerationLogSchema,

	Error: Error,
	ApiError: ApiError,
} as const satisfies { [x: string]: JSONSchema7Definition };

export type References = GetRefs<typeof refs>;

export type Packed<x extends GetKeys<References, 'https://misskey-hub.net/api/schemas/'>> = GetDef<References, x, false, 'https://misskey-hub.net/api/schemas/'>;
export type Def<x extends GetKeys<References>> = GetDef<References, x>;