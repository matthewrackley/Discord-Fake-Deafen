// Auto-generated TypeScript definitions for BetterDiscord Data Stores
// Generated on 2026-04-30
type StoreName = 'AVErrorStore'
| 'AccessibilityStore'
| 'ActiveJoinedThreadsStore'
| 'ActiveThreadsStore'
| 'ActivityInviteEducationStore'
| 'ActivityInviteModalStore'
| 'ActivityLauncherStore'
| 'ActivityShelfStore'
| 'AdyenStore'
| 'ApexExperimentStore'
| 'AppIconPersistedStoreState'
| 'AppLauncherStore'
| 'AppViewStore'
| 'ApplicationAssetsStore'
| 'ApplicationBuildStore'
| 'ApplicationCommandAutocompleteStore'
| 'ApplicationCommandFrecencyStore'
| 'ApplicationCommandIndexStore'
| 'ApplicationCommandStore'
| 'ApplicationDirectoryApplicationsStore'
| 'ApplicationDirectoryCategoriesStore'
| 'ApplicationDirectorySearchStore'
| 'ApplicationDirectorySimilarApplicationsStore'
| 'ApplicationFrecencyStore'
| 'ApplicationStatisticsStore'
| 'ApplicationStore'
| 'ApplicationStoreDirectoryStore'
| 'ApplicationStoreLocationStore'
| 'ApplicationStoreSettingsStore'
| 'ApplicationStoreUserSettingsStore'
| 'ApplicationStreamPreviewStore'
| 'ApplicationStreamingSettingsStore'
| 'ApplicationStreamingStore'
| 'ApplicationSubscriptionChannelNoticeStore'
| 'ApplicationSubscriptionStore'
| 'ApplicationViewStore'
| 'AppliedGuildBoostStore'
| 'ArchivedThreadsStore'
| 'AuthInviteStore'
| 'AuthSessionsStore'
| 'AuthorizedAppsStore'
| 'AutoUpdateStore'
| 'BasicGuildStore'
| 'BillingInfoStore'
| 'BitRateStore'
| 'BraintreeStore'
| 'BrowserCheckoutStateStore'
| 'BrowserHandoffStore'
| 'BurstReactionEffectsStore'
| 'CallChatToastsStore'
| 'CallStore'
| 'CategoryCollapseStore'
| 'CertifiedDeviceStore'
| 'ChangelogStore'
| 'ChannelFollowerStatsStore'
| 'ChannelFollowingPublishBumpStore'
| 'ChannelListStore'
| 'ChannelListUnreadsStore'
| 'ChannelListVoiceCategoryStore'
| 'ChannelMemberStore'
| 'ChannelPinsStore'
| 'ChannelRTCStore'
| 'ChannelSKUStore'
| 'ChannelSectionStore'
| 'ChannelSettingsIntegrationsStore'
| 'ChannelSettingsPermissionsStore'
| 'ChannelSettingsStore'
| 'ChannelStatusStore'
| 'ChannelStore'
| 'ChatWallpaperStore'
| 'CheckoutRecoveryStore'
| 'ClickerGameStore'
| 'ClientThemesBackgroundStore'
| 'ClipsStore'
| 'CloudSyncStore'
| 'CodedLinkNativeAppStateStore'
| 'CollapsedVoiceChannelStore'
| 'CollectiblesCategoryStore'
| 'CollectiblesMarketingsStore'
| 'CollectiblesPurchaseStore'
| 'CollectiblesShopHomesStore'
| 'CollectiblesShopStore'
| 'CommandsMigrationStore'
| 'ConnectedAccountsStore'
| 'ConnectedAppsStore'
| 'ConnectedDeviceStore'
| 'ConsentStore'
| 'ConsumablesStore'
| 'ContentInventoryActivityStore'
| 'ContentInventoryDevToolsStore'
| 'ContentInventoryOutboxStore'
| 'ContentInventoryPersistedStore'
| 'ContentInventoryStore'
| 'ContextMenuStore'
| 'CreatorMonetizationMarketingStore'
| 'CreatorMonetizationStore'
| 'CustomActivityLinksStore'
| 'DCFEventStore'
| 'DataHarvestStore'
| 'DefaultRouteStore'
| 'DetectableGameSupplementalStore'
| 'DetectedOffPlatformPremiumPerksStore'
| 'DevToolsDesignTogglesStore'
| 'DevToolsDevSettingsStore'
| 'DevToolsSettingsStore'
| 'DeveloperActivityShelfStore'
| 'DeveloperExperimentStore'
| 'DeveloperOptionsStore'
| 'DeviceFrecencyStore'
| 'DimensionStore'
| 'DismissibleContentFrameworkStore'
| 'DispatchApplicationErrorStore'
| 'DispatchApplicationLaunchSetupStore'
| 'DispatchApplicationStore'
| 'DispatchManagerStore'
| 'DomainMigrationStore'
| 'DraftStore'
| 'EditMessageStore'
| 'EmailSettingsStore'
| 'EmbeddedActivitiesStore'
| 'EmojiStore'
| 'EnablePublicGuildUpsellNoticeStore'
| 'EntitlementStore'
| 'EventDirectoryStore'
| 'ExpandedGuildFolderStore'
| 'ExperimentStore'
| 'ExternalStreamingStore'
| 'FalsePositiveStore'
| 'FamilyCenterStore'
| 'FavoriteStore'
| 'FavoritesSuggestionStore'
| 'FeedbackOverrideStore'
| 'FirstPartyRichPresenceStore'
| 'ForumActivePostStore'
| 'ForumChannelAdminOnboardingGuideStore'
| 'ForumPostMessagesStore'
| 'ForumPostUnreadCountStore'
| 'ForumSearchStore'
| 'FramesStore'
| 'FrecencyStore'
| 'FriendSuggestionStore'
| 'FriendsStore'
| 'GIFPickerViewStore'
| 'GameConsoleStore'
| 'GameInviteStore'
| 'GameLibraryViewStore'
| 'GamePartyStore'
| 'GameRelationshipStore'
| 'GameStore'
| 'GatedChannelStore'
| 'GatewayConnectionStore'
| 'GeoRestrictedGuildStore'
| 'GiftCodeStore'
| 'GlobalDiscoveryServersSearchCountStore'
| 'GlobalDiscoveryServersSearchLayoutStore'
| 'GlobalDiscoveryServersSearchResultsStore'
| 'GuildAffinitiesStore'
| 'GuildAutomodMessageStore'
| 'GuildAvailabilityStore'
| 'GuildBoostSlotStore'
| 'GuildBoostingNoticeStore'
| 'GuildBoostingProgressBarPersistedStore'
| 'GuildCategoryStore'
| 'GuildChannelStore'
| 'GuildDirectorySearchStore'
| 'GuildDirectoryStore'
| 'GuildDiscoveryCategoryStore'
| 'GuildIdentitySettingsStore'
| 'GuildIncidentsStore'
| 'GuildJoinRequestStoreV2'
| 'GuildLeaderboardRanksStore'
| 'GuildLeaderboardStore'
| 'GuildMFAWarningStore'
| 'GuildMemberCountStore'
| 'GuildMemberRequesterStore'
| 'GuildMemberStore'
| 'GuildNSFWAgreeStore'
| 'GuildOnboardingHomeNavigationStore'
| 'GuildOnboardingHomeSettingsStore'
| 'GuildOnboardingMemberActionStore'
| 'GuildOnboardingPromptsStore'
| 'GuildOnboardingStore'
| 'GuildPowerupsNotificationStore'
| 'GuildPowerupsStore'
| 'GuildProductsStore'
| 'GuildProfileStore'
| 'GuildPromptsStore'
| 'GuildReadStateStore'
| 'GuildRoleConnectionEligibilityStore'
| 'GuildRoleConnectionsConfigurationStore'
| 'GuildRoleMemberCountStore'
| 'GuildRoleStore'
| 'GuildRoleSubscriptionTierTemplatesStore'
| 'GuildRoleSubscriptionsStore'
| 'GuildScheduledEventStore'
| 'GuildSettingsAuditLogStore'
| 'GuildSettingsEmojiStore'
| 'GuildSettingsIntegrationsStore'
| 'GuildSettingsRolesStore'
| 'GuildSettingsStore'
| 'GuildStore'
| 'GuildSubscriptionsStore'
| 'GuildTagChangedCoachmarkStore'
| 'GuildTemplateStore'
| 'GuildTemplateTooltipStore'
| 'GuildVerificationStore'
| 'HangStatusStore'
| 'HighFiveStore'
| 'HookErrorStore'
| 'HotspotStore'
| 'HubLinkNoticeStore'
| 'HypeSquadStore'
| 'IdleStore'
| 'IgnoreNoticeStore'
| 'ImpersonateStore'
| 'IncomingCallStore'
| 'InstallationManagerStore'
| 'InstanceIdStore'
| 'InstantInviteStore'
| 'IntegrationQueryStore'
| 'InteractionModalStore'
| 'InteractionStore'
| 'InviteModalStore'
| 'InviteNoticeStore'
| 'InviteStore'
| 'JoinedThreadsStore'
| 'KeybindsStore'
| 'KeywordFilterStore'
| 'LabFeatureStore'
| 'LaunchableGameStore'
| 'LayerStore'
| 'LayoutStore'
| 'LibraryApplicationStatisticsStore'
| 'LibraryApplicationStore'
| 'LiveChannelNoticesStore'
| 'LocalActivityStore'
| 'LocalInteractionComponentStateStore'
| 'LocaleStore'
| 'LoginRequiredActionStore'
| 'LurkerModePopoutStore'
| 'LurkingStore'
| 'MFAStore'
| 'MaintenanceStore'
| 'MaskedLinkStore'
| 'MaxMemberCountChannelNoticeStore'
| 'MediaEngineStatsStore'
| 'MediaEngineStore'
| 'MediaPlaybackStore'
| 'MediaPostEmbedStore'
| 'MediaPostSharePromptStore'
| 'MemberSafetyStore'
| 'MessageReactionsStore'
| 'MessageRequestPreviewStore'
| 'MessageRequestStore'
| 'MessageStore'
| 'MobileWebSidebarStore'
| 'MultiAccountStore'
| 'MyGuildApplicationsStore'
| 'NativeScreenSharePickerStore'
| 'NetworkStore'
| 'NewChannelsStore'
| 'NewPaymentSourceStore'
| 'NewUserStore'
| 'NewlyAddedEmojiStore'
| 'NoteStore'
| 'NoticeStore'
| 'NotificationCenterItemsStore'
| 'NotificationCenterStore'
| 'NotificationSettingsStore'
| 'NotificationsInboxStore'
| 'NowPlayingStore'
| 'NowPlayingViewStore'
| 'OrderStore'
| 'OverlayBridgeStore'
| 'OverlayNotificationsStore'
| 'OverlayRTCConnectionStore'
| 'OverlayRenderStore'
| 'OverlayRunningGameStore'
| 'OverlaySettingsStore'
| 'OverlayStore'
| 'OverridePremiumTypeStore'
| 'PaymentAuthenticationStore'
| 'PaymentSourceStore'
| 'PaymentStore'
| 'PendingReplyStore'
| 'PermissionSpeakStore'
| 'PermissionStore'
| 'PermissionVADStore'
| 'PhoneStore'
| 'PictureInPictureStore'
| 'PoggermodeAchievementStore'
| 'PoggermodeSettingsStore'
| 'PoggermodeStore'
| 'PopoutWindowStore'
| 'PremiumGiftingIntentStore'
| 'PremiumPaymentModalStore'
| 'PremiumPromoStore'
| 'PresenceStore'
| 'PresenceSubscriptionsStore'
| 'PrivateChannelReadStateStore'
| 'PrivateChannelRecipientsInviteStore'
| 'PrivateChannelSortStore'
| 'ProfileEffectStore'
| 'PromotionsStore'
| 'ProxyBlockStore'
| 'PurchaseTokenAuthStore'
| 'PurchasedItemsFestivityStore'
| 'QuestsStore'
| 'QuickSwitcherStore'
| 'RTCConnectionDesyncStore'
| 'RTCConnectionStore'
| 'RTCDebugStore'
| 'RTCRegionStore'
| 'ReadStateStore'
| 'RecentMentionsStore'
| 'RecentUserActivityStore'
| 'RecentVoiceChannelStore'
| 'RecentlyActiveCollapseStore'
| 'ReferencedMessageStore'
| 'ReferralTrialStore'
| 'RegionStore'
| 'RelationshipStore'
| 'ReportToModStore'
| 'RobloxSubgameStore'
| 'RpcNotificationSettingsStore'
| 'RunningGameStore'
| 'SKUPaymentModalStore'
| 'SKUStore'
| 'SafetyHubStore'
| 'SaveableChannelsStore'
| 'SavedMessagesStore'
| 'SearchAutocompleteStore'
| 'SearchMessageStore'
| 'SearchStore'
| 'SecureFramesPersistedStore'
| 'SecureFramesVerifiedStore'
| 'SelectedChannelStore'
| 'SelectedGuildStore'
| 'SelectivelySyncedUserSettingsStore'
| 'SelfPresenceStore'
| 'SendMessageOptionsStore'
| 'SessionsStore'
| 'SharedCanvasStore'
| 'SlowmodeStore'
| 'SortedGuildStore'
| 'SortedVoiceStateStore'
| 'SoundboardEventStore'
| 'SoundboardOverlayStore'
| 'SoundboardStore'
| 'SoundpackStore'
| 'SpamMessageRequestStore'
| 'SpeakingStore'
| 'SpellcheckStore'
| 'SpotifyProtocolStore'
| 'SpotifyStore'
| 'StageChannelParticipantStore'
| 'StageChannelRoleStore'
| 'StageChannelSelfRichPresenceStore'
| 'StageInstanceStore'
| 'StageMusicStore'
| 'StickerMessagePreviewStore'
| 'StickersPersistedStore'
| 'StickersStore'
| 'StoreListingStore'
| 'StreamRTCConnectionStore'
| 'StreamerModeStore'
| 'StreamingCapabilitiesStore'
| 'SubscriptionPlanStore'
| 'SubscriptionRemindersStore'
| 'SubscriptionRoleStore'
| 'SubscriptionStore'
| 'SummaryStore'
| 'SurveyStore'
| 'TTSStore'
| 'TestModeStore'
| 'ThemeStore'
| 'ThreadMemberListStore'
| 'ThreadMembersStore'
| 'ThreadMessageStore'
| 'TopEmojiStore'
| 'TransientKeyStore'
| 'TutorialIndicatorStore'
| 'TypingStore'
| 'UnreadSettingNoticeStore2'
| 'UnsyncedUserSettingsStore'
| 'UpcomingEventNoticesStore'
| 'UploadAttachmentStore'
| 'UploadStore'
| 'UserAffinitiesV2Store'
| 'UserGuildJoinRequestStore'
| 'UserGuildSettingsStore'
| 'UserLeaderboardStore'
| 'UserOfferStore'
| 'UserProfileStore'
| 'UserRequiredActionStore'
| 'UserSettingsAccountStore'
| 'UserSettingsModalStore'
| 'UserSettingsOverridesStore'
| 'UserSettingsProtoStore'
| 'UserStore'
| 'VerifiedKeyStore'
| 'VideoBackgroundStore'
| 'VideoQualityModeStore'
| 'VideoSpeakerStore'
| 'VideoStreamStore'
| 'ViewHistoryStore'
| 'VirtualCurrencyStore'
| 'VoiceChannelEffectsPersistedStore'
| 'VoiceChannelEffectsStore'
| 'VoiceFilterPersistedStore'
| 'VoiceFilterStore'
| 'VoiceStateStore'
| 'WarpClientStore'
| 'WebAuthnStore'
| 'WebhooksStore'
| 'WelcomeScreenStore'
| 'WindowStore'
| 'WowMomentConfirmationStore'
| 'scheduledMessageStore'
declare namespace BdApi {
  namespace Webpack {
    export function getStore(name: 'AVErrorStore'): AVErrorStore | undefined;
    export function getStore(name: 'AccessibilityStore'): AccessibilityStore | undefined;
    export function getStore(name: 'ActiveJoinedThreadsStore'): ActiveJoinedThreadsStore | undefined;
    export function getStore(name: 'ActiveThreadsStore'): ActiveThreadsStore | undefined;
    export function getStore(name: 'ActivityInviteEducationStore'): ActivityInviteEducationStore | undefined;
    export function getStore(name: 'ActivityInviteModalStore'): ActivityInviteModalStore | undefined;
    export function getStore(name: 'ActivityLauncherStore'): ActivityLauncherStore | undefined;
    export function getStore(name: 'ActivityShelfStore'): ActivityShelfStore | undefined;
    export function getStore(name: 'AdyenStore'): AdyenStore | undefined;
    export function getStore(name: 'ApexExperimentStore'): ApexExperimentStore | undefined;
    export function getStore(name: 'AppIconPersistedStoreState'): AppIconPersistedStoreState | undefined;
    export function getStore(name: 'AppLauncherStore'): AppLauncherStore | undefined;
    export function getStore(name: 'AppViewStore'): AppViewStore | undefined;
    export function getStore(name: 'ApplicationAssetsStore'): ApplicationAssetsStore | undefined;
    export function getStore(name: 'ApplicationBuildStore'): ApplicationBuildStore | undefined;
    export function getStore(name: 'ApplicationCommandAutocompleteStore'): ApplicationCommandAutocompleteStore | undefined;
    export function getStore(name: 'ApplicationCommandFrecencyStore'): ApplicationCommandFrecencyStore | undefined;
    export function getStore(name: 'ApplicationCommandIndexStore'): ApplicationCommandIndexStore | undefined;
    export function getStore(name: 'ApplicationCommandStore'): ApplicationCommandStore | undefined;
    export function getStore(name: 'ApplicationDirectoryApplicationsStore'): ApplicationDirectoryApplicationsStore | undefined;
    export function getStore(name: 'ApplicationDirectoryCategoriesStore'): ApplicationDirectoryCategoriesStore | undefined;
    export function getStore(name: 'ApplicationDirectorySearchStore'): ApplicationDirectorySearchStore | undefined;
    export function getStore(name: 'ApplicationDirectorySimilarApplicationsStore'): ApplicationDirectorySimilarApplicationsStore | undefined;
    export function getStore(name: 'ApplicationFrecencyStore'): ApplicationFrecencyStore | undefined;
    export function getStore(name: 'ApplicationStatisticsStore'): ApplicationStatisticsStore | undefined;
    export function getStore(name: 'ApplicationStore'): ApplicationStore | undefined;
    export function getStore(name: 'ApplicationStoreDirectoryStore'): ApplicationStoreDirectoryStore | undefined;
    export function getStore(name: 'ApplicationStoreLocationStore'): ApplicationStoreLocationStore | undefined;
    export function getStore(name: 'ApplicationStoreSettingsStore'): ApplicationStoreSettingsStore | undefined;
    export function getStore(name: 'ApplicationStoreUserSettingsStore'): ApplicationStoreUserSettingsStore | undefined;
    export function getStore(name: 'ApplicationStreamPreviewStore'): ApplicationStreamPreviewStore | undefined;
    export function getStore(name: 'ApplicationStreamingSettingsStore'): ApplicationStreamingSettingsStore | undefined;
    export function getStore(name: 'ApplicationStreamingStore'): ApplicationStreamingStore | undefined;
    export function getStore(name: 'ApplicationSubscriptionChannelNoticeStore'): ApplicationSubscriptionChannelNoticeStore | undefined;
    export function getStore(name: 'ApplicationSubscriptionStore'): ApplicationSubscriptionStore | undefined;
    export function getStore(name: 'ApplicationViewStore'): ApplicationViewStore | undefined;
    export function getStore(name: 'AppliedGuildBoostStore'): AppliedGuildBoostStore | undefined;
    export function getStore(name: 'ArchivedThreadsStore'): ArchivedThreadsStore | undefined;
    export function getStore(name: 'AuthInviteStore'): AuthInviteStore | undefined;
    export function getStore(name: 'AuthSessionsStore'): AuthSessionsStore | undefined;
    export function getStore(name: 'AuthorizedAppsStore'): AuthorizedAppsStore | undefined;
    export function getStore(name: 'AutoUpdateStore'): AutoUpdateStore | undefined;
    export function getStore(name: 'BasicGuildStore'): BasicGuildStore | undefined;
    export function getStore(name: 'BillingInfoStore'): BillingInfoStore | undefined;
    export function getStore(name: 'BitRateStore'): BitRateStore | undefined;
    export function getStore(name: 'BraintreeStore'): BraintreeStore | undefined;
    export function getStore(name: 'BrowserCheckoutStateStore'): BrowserCheckoutStateStore | undefined;
    export function getStore(name: 'BrowserHandoffStore'): BrowserHandoffStore | undefined;
    export function getStore(name: 'BurstReactionEffectsStore'): BurstReactionEffectsStore | undefined;
    export function getStore(name: 'CallChatToastsStore'): CallChatToastsStore | undefined;
    export function getStore(name: 'CallStore'): CallStore | undefined;
    export function getStore(name: 'CategoryCollapseStore'): CategoryCollapseStore | undefined;
    export function getStore(name: 'CertifiedDeviceStore'): CertifiedDeviceStore | undefined;
    export function getStore(name: 'ChangelogStore'): ChangelogStore | undefined;
    export function getStore(name: 'ChannelFollowerStatsStore'): ChannelFollowerStatsStore | undefined;
    export function getStore(name: 'ChannelFollowingPublishBumpStore'): ChannelFollowingPublishBumpStore | undefined;
    export function getStore(name: 'ChannelListStore'): ChannelListStore | undefined;
    export function getStore(name: 'ChannelListUnreadsStore'): ChannelListUnreadsStore | undefined;
    export function getStore(name: 'ChannelListVoiceCategoryStore'): ChannelListVoiceCategoryStore | undefined;
    export function getStore(name: 'ChannelMemberStore'): ChannelMemberStore | undefined;
    export function getStore(name: 'ChannelPinsStore'): ChannelPinsStore | undefined;
    export function getStore(name: 'ChannelRTCStore'): ChannelRTCStore | undefined;
    export function getStore(name: 'ChannelSKUStore'): ChannelSKUStore | undefined;
    export function getStore(name: 'ChannelSectionStore'): ChannelSectionStore | undefined;
    export function getStore(name: 'ChannelSettingsIntegrationsStore'): ChannelSettingsIntegrationsStore | undefined;
    export function getStore(name: 'ChannelSettingsPermissionsStore'): ChannelSettingsPermissionsStore | undefined;
    export function getStore(name: 'ChannelSettingsStore'): ChannelSettingsStore | undefined;
    export function getStore(name: 'ChannelStatusStore'): ChannelStatusStore | undefined;
    export function getStore(name: 'ChannelStore'): ChannelStore | undefined;
    export function getStore(name: 'ChatWallpaperStore'): ChatWallpaperStore | undefined;
    export function getStore(name: 'CheckoutRecoveryStore'): CheckoutRecoveryStore | undefined;
    export function getStore(name: 'ClickerGameStore'): ClickerGameStore | undefined;
    export function getStore(name: 'ClientThemesBackgroundStore'): ClientThemesBackgroundStore | undefined;
    export function getStore(name: 'ClipsStore'): ClipsStore | undefined;
    export function getStore(name: 'CloudSyncStore'): CloudSyncStore | undefined;
    export function getStore(name: 'CodedLinkNativeAppStateStore'): CodedLinkNativeAppStateStore | undefined;
    export function getStore(name: 'CollapsedVoiceChannelStore'): CollapsedVoiceChannelStore | undefined;
    export function getStore(name: 'CollectiblesCategoryStore'): CollectiblesCategoryStore | undefined;
    export function getStore(name: 'CollectiblesMarketingsStore'): CollectiblesMarketingsStore | undefined;
    export function getStore(name: 'CollectiblesPurchaseStore'): CollectiblesPurchaseStore | undefined;
    export function getStore(name: 'CollectiblesShopHomesStore'): CollectiblesShopHomesStore | undefined;
    export function getStore(name: 'CollectiblesShopStore'): CollectiblesShopStore | undefined;
    export function getStore(name: 'CommandsMigrationStore'): CommandsMigrationStore | undefined;
    export function getStore(name: 'ConnectedAccountsStore'): ConnectedAccountsStore | undefined;
    export function getStore(name: 'ConnectedAppsStore'): ConnectedAppsStore | undefined;
    export function getStore(name: 'ConnectedDeviceStore'): ConnectedDeviceStore | undefined;
    export function getStore(name: 'ConsentStore'): ConsentStore | undefined;
    export function getStore(name: 'ConsumablesStore'): ConsumablesStore | undefined;
    export function getStore(name: 'ContentInventoryActivityStore'): ContentInventoryActivityStore | undefined;
    export function getStore(name: 'ContentInventoryDevToolsStore'): ContentInventoryDevToolsStore | undefined;
    export function getStore(name: 'ContentInventoryOutboxStore'): ContentInventoryOutboxStore | undefined;
    export function getStore(name: 'ContentInventoryPersistedStore'): ContentInventoryPersistedStore | undefined;
    export function getStore(name: 'ContentInventoryStore'): ContentInventoryStore | undefined;
    export function getStore(name: 'ContextMenuStore'): ContextMenuStore | undefined;
    export function getStore(name: 'CreatorMonetizationMarketingStore'): CreatorMonetizationMarketingStore | undefined;
    export function getStore(name: 'CreatorMonetizationStore'): CreatorMonetizationStore | undefined;
    export function getStore(name: 'CustomActivityLinksStore'): CustomActivityLinksStore | undefined;
    export function getStore(name: 'DCFEventStore'): DCFEventStore | undefined;
    export function getStore(name: 'DataHarvestStore'): DataHarvestStore | undefined;
    export function getStore(name: 'DefaultRouteStore'): DefaultRouteStore | undefined;
    export function getStore(name: 'DetectableGameSupplementalStore'): DetectableGameSupplementalStore | undefined;
    export function getStore(name: 'DetectedOffPlatformPremiumPerksStore'): DetectedOffPlatformPremiumPerksStore | undefined;
    export function getStore(name: 'DevToolsDesignTogglesStore'): DevToolsDesignTogglesStore | undefined;
    export function getStore(name: 'DevToolsDevSettingsStore'): DevToolsDevSettingsStore | undefined;
    export function getStore(name: 'DevToolsSettingsStore'): DevToolsSettingsStore | undefined;
    export function getStore(name: 'DeveloperActivityShelfStore'): DeveloperActivityShelfStore | undefined;
    export function getStore(name: 'DeveloperExperimentStore'): DeveloperExperimentStore | undefined;
    export function getStore(name: 'DeveloperOptionsStore'): DeveloperOptionsStore | undefined;
    export function getStore(name: 'DeviceFrecencyStore'): DeviceFrecencyStore | undefined;
    export function getStore(name: 'DimensionStore'): DimensionStore | undefined;
    export function getStore(name: 'DismissibleContentFrameworkStore'): DismissibleContentFrameworkStore | undefined;
    export function getStore(name: 'DispatchApplicationErrorStore'): DispatchApplicationErrorStore | undefined;
    export function getStore(name: 'DispatchApplicationLaunchSetupStore'): DispatchApplicationLaunchSetupStore | undefined;
    export function getStore(name: 'DispatchApplicationStore'): DispatchApplicationStore | undefined;
    export function getStore(name: 'DispatchManagerStore'): DispatchManagerStore | undefined;
    export function getStore(name: 'DomainMigrationStore'): DomainMigrationStore | undefined;
    export function getStore(name: 'DraftStore'): DraftStore | undefined;
    export function getStore(name: 'EditMessageStore'): EditMessageStore | undefined;
    export function getStore(name: 'EmailSettingsStore'): EmailSettingsStore | undefined;
    export function getStore(name: 'EmbeddedActivitiesStore'): EmbeddedActivitiesStore | undefined;
    export function getStore(name: 'EmojiStore'): EmojiStore | undefined;
    export function getStore(name: 'EnablePublicGuildUpsellNoticeStore'): EnablePublicGuildUpsellNoticeStore | undefined;
    export function getStore(name: 'EntitlementStore'): EntitlementStore | undefined;
    export function getStore(name: 'EventDirectoryStore'): EventDirectoryStore | undefined;
    export function getStore(name: 'ExpandedGuildFolderStore'): ExpandedGuildFolderStore | undefined;
    export function getStore(name: 'ExperimentStore'): ExperimentStore | undefined;
    export function getStore(name: 'ExternalStreamingStore'): ExternalStreamingStore | undefined;
    export function getStore(name: 'FalsePositiveStore'): FalsePositiveStore | undefined;
    export function getStore(name: 'FamilyCenterStore'): FamilyCenterStore | undefined;
    export function getStore(name: 'FavoriteStore'): FavoriteStore | undefined;
    export function getStore(name: 'FavoritesSuggestionStore'): FavoritesSuggestionStore | undefined;
    export function getStore(name: 'FeedbackOverrideStore'): FeedbackOverrideStore | undefined;
    export function getStore(name: 'FirstPartyRichPresenceStore'): FirstPartyRichPresenceStore | undefined;
    export function getStore(name: 'ForumActivePostStore'): ForumActivePostStore | undefined;
    export function getStore(name: 'ForumChannelAdminOnboardingGuideStore'): ForumChannelAdminOnboardingGuideStore | undefined;
    export function getStore(name: 'ForumPostMessagesStore'): ForumPostMessagesStore | undefined;
    export function getStore(name: 'ForumPostUnreadCountStore'): ForumPostUnreadCountStore | undefined;
    export function getStore(name: 'ForumSearchStore'): ForumSearchStore | undefined;
    export function getStore(name: 'FramesStore'): FramesStore | undefined;
    export function getStore(name: 'FrecencyStore'): FrecencyStore | undefined;
    export function getStore(name: 'FriendSuggestionStore'): FriendSuggestionStore | undefined;
    export function getStore(name: 'FriendsStore'): FriendsStore | undefined;
    export function getStore(name: 'GIFPickerViewStore'): GIFPickerViewStore | undefined;
    export function getStore(name: 'GameConsoleStore'): GameConsoleStore | undefined;
    export function getStore(name: 'GameInviteStore'): GameInviteStore | undefined;
    export function getStore(name: 'GameLibraryViewStore'): GameLibraryViewStore | undefined;
    export function getStore(name: 'GamePartyStore'): GamePartyStore | undefined;
    export function getStore(name: 'GameRelationshipStore'): GameRelationshipStore | undefined;
    export function getStore(name: 'GameStore'): GameStore | undefined;
    export function getStore(name: 'GatedChannelStore'): GatedChannelStore | undefined;
    export function getStore(name: 'GatewayConnectionStore'): GatewayConnectionStore | undefined;
    export function getStore(name: 'GeoRestrictedGuildStore'): GeoRestrictedGuildStore | undefined;
    export function getStore(name: 'GiftCodeStore'): GiftCodeStore | undefined;
    export function getStore(name: 'GlobalDiscoveryServersSearchCountStore'): GlobalDiscoveryServersSearchCountStore | undefined;
    export function getStore(name: 'GlobalDiscoveryServersSearchLayoutStore'): GlobalDiscoveryServersSearchLayoutStore | undefined;
    export function getStore(name: 'GlobalDiscoveryServersSearchResultsStore'): GlobalDiscoveryServersSearchResultsStore | undefined;
    export function getStore(name: 'GuildAffinitiesStore'): GuildAffinitiesStore | undefined;
    export function getStore(name: 'GuildAutomodMessageStore'): GuildAutomodMessageStore | undefined;
    export function getStore(name: 'GuildAvailabilityStore'): GuildAvailabilityStore | undefined;
    export function getStore(name: 'GuildBoostSlotStore'): GuildBoostSlotStore | undefined;
    export function getStore(name: 'GuildBoostingNoticeStore'): GuildBoostingNoticeStore | undefined;
    export function getStore(name: 'GuildBoostingProgressBarPersistedStore'): GuildBoostingProgressBarPersistedStore | undefined;
    export function getStore(name: 'GuildCategoryStore'): GuildCategoryStore | undefined;
    export function getStore(name: 'GuildChannelStore'): GuildChannelStore | undefined;
    export function getStore(name: 'GuildDirectorySearchStore'): GuildDirectorySearchStore | undefined;
    export function getStore(name: 'GuildDirectoryStore'): GuildDirectoryStore | undefined;
    export function getStore(name: 'GuildDiscoveryCategoryStore'): GuildDiscoveryCategoryStore | undefined;
    export function getStore(name: 'GuildIdentitySettingsStore'): GuildIdentitySettingsStore | undefined;
    export function getStore(name: 'GuildIncidentsStore'): GuildIncidentsStore | undefined;
    export function getStore(name: 'GuildJoinRequestStoreV2'): GuildJoinRequestStoreV2 | undefined;
    export function getStore(name: 'GuildLeaderboardRanksStore'): GuildLeaderboardRanksStore | undefined;
    export function getStore(name: 'GuildLeaderboardStore'): GuildLeaderboardStore | undefined;
    export function getStore(name: 'GuildMFAWarningStore'): GuildMFAWarningStore | undefined;
    export function getStore(name: 'GuildMemberCountStore'): GuildMemberCountStore | undefined;
    export function getStore(name: 'GuildMemberRequesterStore'): GuildMemberRequesterStore | undefined;
    export function getStore(name: 'GuildMemberStore'): GuildMemberStore | undefined;
    export function getStore(name: 'GuildNSFWAgreeStore'): GuildNSFWAgreeStore | undefined;
    export function getStore(name: 'GuildOnboardingHomeNavigationStore'): GuildOnboardingHomeNavigationStore | undefined;
    export function getStore(name: 'GuildOnboardingHomeSettingsStore'): GuildOnboardingHomeSettingsStore | undefined;
    export function getStore(name: 'GuildOnboardingMemberActionStore'): GuildOnboardingMemberActionStore | undefined;
    export function getStore(name: 'GuildOnboardingPromptsStore'): GuildOnboardingPromptsStore | undefined;
    export function getStore(name: 'GuildOnboardingStore'): GuildOnboardingStore | undefined;
    export function getStore(name: 'GuildPowerupsNotificationStore'): GuildPowerupsNotificationStore | undefined;
    export function getStore(name: 'GuildPowerupsStore'): GuildPowerupsStore | undefined;
    export function getStore(name: 'GuildProductsStore'): GuildProductsStore | undefined;
    export function getStore(name: 'GuildProfileStore'): GuildProfileStore | undefined;
    export function getStore(name: 'GuildPromptsStore'): GuildPromptsStore | undefined;
    export function getStore(name: 'GuildReadStateStore'): GuildReadStateStore | undefined;
    export function getStore(name: 'GuildRoleConnectionEligibilityStore'): GuildRoleConnectionEligibilityStore | undefined;
    export function getStore(name: 'GuildRoleConnectionsConfigurationStore'): GuildRoleConnectionsConfigurationStore | undefined;
    export function getStore(name: 'GuildRoleMemberCountStore'): GuildRoleMemberCountStore | undefined;
    export function getStore(name: 'GuildRoleStore'): GuildRoleStore | undefined;
    export function getStore(name: 'GuildRoleSubscriptionTierTemplatesStore'): GuildRoleSubscriptionTierTemplatesStore | undefined;
    export function getStore(name: 'GuildRoleSubscriptionsStore'): GuildRoleSubscriptionsStore | undefined;
    export function getStore(name: 'GuildScheduledEventStore'): GuildScheduledEventStore | undefined;
    export function getStore(name: 'GuildSettingsAuditLogStore'): GuildSettingsAuditLogStore | undefined;
    export function getStore(name: 'GuildSettingsEmojiStore'): GuildSettingsEmojiStore | undefined;
    export function getStore(name: 'GuildSettingsIntegrationsStore'): GuildSettingsIntegrationsStore | undefined;
    export function getStore(name: 'GuildSettingsRolesStore'): GuildSettingsRolesStore | undefined;
    export function getStore(name: 'GuildSettingsStore'): GuildSettingsStore | undefined;
    export function getStore(name: 'GuildStore'): GuildStore | undefined;
    export function getStore(name: 'GuildSubscriptionsStore'): GuildSubscriptionsStore | undefined;
    export function getStore(name: 'GuildTagChangedCoachmarkStore'): GuildTagChangedCoachmarkStore | undefined;
    export function getStore(name: 'GuildTemplateStore'): GuildTemplateStore | undefined;
    export function getStore(name: 'GuildTemplateTooltipStore'): GuildTemplateTooltipStore | undefined;
    export function getStore(name: 'GuildVerificationStore'): GuildVerificationStore | undefined;
    export function getStore(name: 'HangStatusStore'): HangStatusStore | undefined;
    export function getStore(name: 'HighFiveStore'): HighFiveStore | undefined;
    export function getStore(name: 'HookErrorStore'): HookErrorStore | undefined;
    export function getStore(name: 'HotspotStore'): HotspotStore | undefined;
    export function getStore(name: 'HubLinkNoticeStore'): HubLinkNoticeStore | undefined;
    export function getStore(name: 'HypeSquadStore'): HypeSquadStore | undefined;
    export function getStore(name: 'IdleStore'): IdleStore | undefined;
    export function getStore(name: 'IgnoreNoticeStore'): IgnoreNoticeStore | undefined;
    export function getStore(name: 'ImpersonateStore'): ImpersonateStore | undefined;
    export function getStore(name: 'IncomingCallStore'): IncomingCallStore | undefined;
    export function getStore(name: 'InstallationManagerStore'): InstallationManagerStore | undefined;
    export function getStore(name: 'InstanceIdStore'): InstanceIdStore | undefined;
    export function getStore(name: 'InstantInviteStore'): InstantInviteStore | undefined;
    export function getStore(name: 'IntegrationQueryStore'): IntegrationQueryStore | undefined;
    export function getStore(name: 'InteractionModalStore'): InteractionModalStore | undefined;
    export function getStore(name: 'InteractionStore'): InteractionStore | undefined;
    export function getStore(name: 'InviteModalStore'): InviteModalStore | undefined;
    export function getStore(name: 'InviteNoticeStore'): InviteNoticeStore | undefined;
    export function getStore(name: 'InviteStore'): InviteStore | undefined;
    export function getStore(name: 'JoinedThreadsStore'): JoinedThreadsStore | undefined;
    export function getStore(name: 'KeybindsStore'): KeybindsStore | undefined;
    export function getStore(name: 'KeywordFilterStore'): KeywordFilterStore | undefined;
    export function getStore(name: 'LabFeatureStore'): LabFeatureStore | undefined;
    export function getStore(name: 'LaunchableGameStore'): LaunchableGameStore | undefined;
    export function getStore(name: 'LayerStore'): LayerStore | undefined;
    export function getStore(name: 'LayoutStore'): LayoutStore | undefined;
    export function getStore(name: 'LibraryApplicationStatisticsStore'): LibraryApplicationStatisticsStore | undefined;
    export function getStore(name: 'LibraryApplicationStore'): LibraryApplicationStore | undefined;
    export function getStore(name: 'LiveChannelNoticesStore'): LiveChannelNoticesStore | undefined;
    export function getStore(name: 'LocalActivityStore'): LocalActivityStore | undefined;
    export function getStore(name: 'LocalInteractionComponentStateStore'): LocalInteractionComponentStateStore | undefined;
    export function getStore(name: 'LocaleStore'): LocaleStore | undefined;
    export function getStore(name: 'LoginRequiredActionStore'): LoginRequiredActionStore | undefined;
    export function getStore(name: 'LurkerModePopoutStore'): LurkerModePopoutStore | undefined;
    export function getStore(name: 'LurkingStore'): LurkingStore | undefined;
    export function getStore(name: 'MFAStore'): MFAStore | undefined;
    export function getStore(name: 'MaintenanceStore'): MaintenanceStore | undefined;
    export function getStore(name: 'MaskedLinkStore'): MaskedLinkStore | undefined;
    export function getStore(name: 'MaxMemberCountChannelNoticeStore'): MaxMemberCountChannelNoticeStore | undefined;
    export function getStore(name: 'MediaEngineStatsStore'): MediaEngineStatsStore | undefined;
    export function getStore(name: 'MediaEngineStore'): MediaEngineStore | undefined;
    export function getStore(name: 'MediaPlaybackStore'): MediaPlaybackStore | undefined;
    export function getStore(name: 'MediaPostEmbedStore'): MediaPostEmbedStore | undefined;
    export function getStore(name: 'MediaPostSharePromptStore'): MediaPostSharePromptStore | undefined;
    export function getStore(name: 'MemberSafetyStore'): MemberSafetyStore | undefined;
    export function getStore(name: 'MessageReactionsStore'): MessageReactionsStore | undefined;
    export function getStore(name: 'MessageRequestPreviewStore'): MessageRequestPreviewStore | undefined;
    export function getStore(name: 'MessageRequestStore'): MessageRequestStore | undefined;
    export function getStore(name: 'MessageStore'): MessageStore | undefined;
    export function getStore(name: 'MobileWebSidebarStore'): MobileWebSidebarStore | undefined;
    export function getStore(name: 'MultiAccountStore'): MultiAccountStore | undefined;
    export function getStore(name: 'MyGuildApplicationsStore'): MyGuildApplicationsStore | undefined;
    export function getStore(name: 'NativeScreenSharePickerStore'): NativeScreenSharePickerStore | undefined;
    export function getStore(name: 'NetworkStore'): NetworkStore | undefined;
    export function getStore(name: 'NewChannelsStore'): NewChannelsStore | undefined;
    export function getStore(name: 'NewPaymentSourceStore'): NewPaymentSourceStore | undefined;
    export function getStore(name: 'NewUserStore'): NewUserStore | undefined;
    export function getStore(name: 'NewlyAddedEmojiStore'): NewlyAddedEmojiStore | undefined;
    export function getStore(name: 'NoteStore'): NoteStore | undefined;
    export function getStore(name: 'NoticeStore'): NoticeStore | undefined;
    export function getStore(name: 'NotificationCenterItemsStore'): NotificationCenterItemsStore | undefined;
    export function getStore(name: 'NotificationCenterStore'): NotificationCenterStore | undefined;
    export function getStore(name: 'NotificationSettingsStore'): NotificationSettingsStore | undefined;
    export function getStore(name: 'NotificationsInboxStore'): NotificationsInboxStore | undefined;
    export function getStore(name: 'NowPlayingStore'): NowPlayingStore | undefined;
    export function getStore(name: 'NowPlayingViewStore'): NowPlayingViewStore | undefined;
    export function getStore(name: 'OrderStore'): OrderStore | undefined;
    export function getStore(name: 'OverlayBridgeStore'): OverlayBridgeStore | undefined;
    export function getStore(name: 'OverlayNotificationsStore'): OverlayNotificationsStore | undefined;
    export function getStore(name: 'OverlayRTCConnectionStore'): OverlayRTCConnectionStore | undefined;
    export function getStore(name: 'OverlayRenderStore'): OverlayRenderStore | undefined;
    export function getStore(name: 'OverlayRunningGameStore'): OverlayRunningGameStore | undefined;
    export function getStore(name: 'OverlaySettingsStore'): OverlaySettingsStore | undefined;
    export function getStore(name: 'OverlayStore'): OverlayStore | undefined;
    export function getStore(name: 'OverlayStore-v3'): OverlayStoreV3 | undefined;
    export function getStore(name: 'OverridePremiumTypeStore'): OverridePremiumTypeStore | undefined;
    export function getStore(name: 'PaymentAuthenticationStore'): PaymentAuthenticationStore | undefined;
    export function getStore(name: 'PaymentSourceStore'): PaymentSourceStore | undefined;
    export function getStore(name: 'PaymentStore'): PaymentStore | undefined;
    export function getStore(name: 'PendingReplyStore'): PendingReplyStore | undefined;
    export function getStore(name: 'PermissionSpeakStore'): PermissionSpeakStore | undefined;
    export function getStore(name: 'PermissionStore'): PermissionStore | undefined;
    export function getStore(name: 'PermissionVADStore'): PermissionVADStore | undefined;
    export function getStore(name: 'PhoneStore'): PhoneStore | undefined;
    export function getStore(name: 'PictureInPictureStore'): PictureInPictureStore | undefined;
    export function getStore(name: 'PoggermodeAchievementStore'): PoggermodeAchievementStore | undefined;
    export function getStore(name: 'PoggermodeSettingsStore'): PoggermodeSettingsStore | undefined;
    export function getStore(name: 'PoggermodeStore'): PoggermodeStore | undefined;
    export function getStore(name: 'PopoutWindowStore'): PopoutWindowStore | undefined;
    export function getStore(name: 'PremiumGiftingIntentStore'): PremiumGiftingIntentStore | undefined;
    export function getStore(name: 'PremiumPaymentModalStore'): PremiumPaymentModalStore | undefined;
    export function getStore(name: 'PremiumPromoStore'): PremiumPromoStore | undefined;
    export function getStore(name: 'PresenceStore'): PresenceStore | undefined;
    export function getStore(name: 'PresenceSubscriptionsStore'): PresenceSubscriptionsStore | undefined;
    export function getStore(name: 'PrivateChannelReadStateStore'): PrivateChannelReadStateStore | undefined;
    export function getStore(name: 'PrivateChannelRecipientsInviteStore'): PrivateChannelRecipientsInviteStore | undefined;
    export function getStore(name: 'PrivateChannelSortStore'): PrivateChannelSortStore | undefined;
    export function getStore(name: 'ProfileEffectStore'): ProfileEffectStore | undefined;
    export function getStore(name: 'PromotionsStore'): PromotionsStore | undefined;
    export function getStore(name: 'ProxyBlockStore'): ProxyBlockStore | undefined;
    export function getStore(name: 'PurchaseTokenAuthStore'): PurchaseTokenAuthStore | undefined;
    export function getStore(name: 'PurchasedItemsFestivityStore'): PurchasedItemsFestivityStore | undefined;
    export function getStore(name: 'QuestsStore'): QuestsStore | undefined;
    export function getStore(name: 'QuickSwitcherStore'): QuickSwitcherStore | undefined;
    export function getStore(name: 'RTCConnectionDesyncStore'): RTCConnectionDesyncStore | undefined;
    export function getStore(name: 'RTCConnectionStore'): RTCConnectionStore | undefined;
    export function getStore(name: 'RTCDebugStore'): RTCDebugStore | undefined;
    export function getStore(name: 'RTCRegionStore'): RTCRegionStore | undefined;
    export function getStore(name: 'ReadStateStore'): ReadStateStore | undefined;
    export function getStore(name: 'RecentMentionsStore'): RecentMentionsStore | undefined;
    export function getStore(name: 'RecentUserActivityStore'): RecentUserActivityStore | undefined;
    export function getStore(name: 'RecentVoiceChannelStore'): RecentVoiceChannelStore | undefined;
    export function getStore(name: 'RecentlyActiveCollapseStore'): RecentlyActiveCollapseStore | undefined;
    export function getStore(name: 'ReferencedMessageStore'): ReferencedMessageStore | undefined;
    export function getStore(name: 'ReferralTrialStore'): ReferralTrialStore | undefined;
    export function getStore(name: 'RegionStore'): RegionStore | undefined;
    export function getStore(name: 'RelationshipStore'): RelationshipStore | undefined;
    export function getStore(name: 'ReportToModStore'): ReportToModStore | undefined;
    export function getStore(name: 'RobloxSubgameStore'): RobloxSubgameStore | undefined;
    export function getStore(name: 'RpcNotificationSettingsStore'): RpcNotificationSettingsStore | undefined;
    export function getStore(name: 'RunningGameStore'): RunningGameStore | undefined;
    export function getStore(name: 'SKUPaymentModalStore'): SKUPaymentModalStore | undefined;
    export function getStore(name: 'SKUStore'): SKUStore | undefined;
    export function getStore(name: 'SafetyHubStore'): SafetyHubStore | undefined;
    export function getStore(name: 'SaveableChannelsStore'): SaveableChannelsStore | undefined;
    export function getStore(name: 'SavedMessagesStore'): SavedMessagesStore | undefined;
    export function getStore(name: 'SearchAutocompleteStore'): SearchAutocompleteStore | undefined;
    export function getStore(name: 'SearchMessageStore'): SearchMessageStore | undefined;
    export function getStore(name: 'SearchStore'): SearchStore | undefined;
    export function getStore(name: 'SecureFramesPersistedStore'): SecureFramesPersistedStore | undefined;
    export function getStore(name: 'SecureFramesVerifiedStore'): SecureFramesVerifiedStore | undefined;
    export function getStore(name: 'SelectedChannelStore'): SelectedChannelStore | undefined;
    export function getStore(name: 'SelectedGuildStore'): SelectedGuildStore | undefined;
    export function getStore(name: 'SelectivelySyncedUserSettingsStore'): SelectivelySyncedUserSettingsStore | undefined;
    export function getStore(name: 'SelfPresenceStore'): SelfPresenceStore | undefined;
    export function getStore(name: 'SendMessageOptionsStore'): SendMessageOptionsStore | undefined;
    export function getStore(name: 'SessionsStore'): SessionsStore | undefined;
    export function getStore(name: 'SharedCanvasStore'): SharedCanvasStore | undefined;
    export function getStore(name: 'SlowmodeStore'): SlowmodeStore | undefined;
    export function getStore(name: 'SortedGuildStore'): SortedGuildStore | undefined;
    export function getStore(name: 'SortedVoiceStateStore'): SortedVoiceStateStore | undefined;
    export function getStore(name: 'SoundboardEventStore'): SoundboardEventStore | undefined;
    export function getStore(name: 'SoundboardOverlayStore'): SoundboardOverlayStore | undefined;
    export function getStore(name: 'SoundboardStore'): SoundboardStore | undefined;
    export function getStore(name: 'SoundpackStore'): SoundpackStore | undefined;
    export function getStore(name: 'SpamMessageRequestStore'): SpamMessageRequestStore | undefined;
    export function getStore(name: 'SpeakingStore'): SpeakingStore | undefined;
    export function getStore(name: 'SpellcheckStore'): SpellcheckStore | undefined;
    export function getStore(name: 'SpotifyProtocolStore'): SpotifyProtocolStore | undefined;
    export function getStore(name: 'SpotifyStore'): SpotifyStore | undefined;
    export function getStore(name: 'StageChannelParticipantStore'): StageChannelParticipantStore | undefined;
    export function getStore(name: 'StageChannelRoleStore'): StageChannelRoleStore | undefined;
    export function getStore(name: 'StageChannelSelfRichPresenceStore'): StageChannelSelfRichPresenceStore | undefined;
    export function getStore(name: 'StageInstanceStore'): StageInstanceStore | undefined;
    export function getStore(name: 'StageMusicStore'): StageMusicStore | undefined;
    export function getStore(name: 'StickerMessagePreviewStore'): StickerMessagePreviewStore | undefined;
    export function getStore(name: 'StickersPersistedStore'): StickersPersistedStore | undefined;
    export function getStore(name: 'StickersStore'): StickersStore | undefined;
    export function getStore(name: 'StoreListingStore'): StoreListingStore | undefined;
    export function getStore(name: 'StreamRTCConnectionStore'): StreamRTCConnectionStore | undefined;
    export function getStore(name: 'StreamerModeStore'): StreamerModeStore | undefined;
    export function getStore(name: 'StreamingCapabilitiesStore'): StreamingCapabilitiesStore | undefined;
    export function getStore(name: 'SubscriptionPlanStore'): SubscriptionPlanStore | undefined;
    export function getStore(name: 'SubscriptionRemindersStore'): SubscriptionRemindersStore | undefined;
    export function getStore(name: 'SubscriptionRoleStore'): SubscriptionRoleStore | undefined;
    export function getStore(name: 'SubscriptionStore'): SubscriptionStore | undefined;
    export function getStore(name: 'SummaryStore'): SummaryStore | undefined;
    export function getStore(name: 'SurveyStore'): SurveyStore | undefined;
    export function getStore(name: 'TTSStore'): TTSStore | undefined;
    export function getStore(name: 'TestModeStore'): TestModeStore | undefined;
    export function getStore(name: 'ThemeStore'): ThemeStore | undefined;
    export function getStore(name: 'ThreadMemberListStore'): ThreadMemberListStore | undefined;
    export function getStore(name: 'ThreadMembersStore'): ThreadMembersStore | undefined;
    export function getStore(name: 'ThreadMessageStore'): ThreadMessageStore | undefined;
    export function getStore(name: 'TopEmojiStore'): TopEmojiStore | undefined;
    export function getStore(name: 'TransientKeyStore'): TransientKeyStore | undefined;
    export function getStore(name: 'TutorialIndicatorStore'): TutorialIndicatorStore | undefined;
    export function getStore(name: 'TypingStore'): TypingStore | undefined;
    export function getStore(name: 'UnreadSettingNoticeStore2'): UnreadSettingNoticeStore2 | undefined;
    export function getStore(name: 'UnsyncedUserSettingsStore'): UnsyncedUserSettingsStore | undefined;
    export function getStore(name: 'UpcomingEventNoticesStore'): UpcomingEventNoticesStore | undefined;
    export function getStore(name: 'UploadAttachmentStore'): UploadAttachmentStore | undefined;
    export function getStore(name: 'UploadStore'): UploadStore | undefined;
    export function getStore(name: 'UserAffinitiesV2Store'): UserAffinitiesV2Store | undefined;
    export function getStore(name: 'UserGuildJoinRequestStore'): UserGuildJoinRequestStore | undefined;
    export function getStore(name: 'UserGuildSettingsStore'): UserGuildSettingsStore | undefined;
    export function getStore(name: 'UserLeaderboardStore'): UserLeaderboardStore | undefined;
    export function getStore(name: 'UserOfferStore'): UserOfferStore | undefined;
    export function getStore(name: 'UserProfileStore'): UserProfileStore | undefined;
    export function getStore(name: 'UserRequiredActionStore'): UserRequiredActionStore | undefined;
    export function getStore(name: 'UserSettingsAccountStore'): UserSettingsAccountStore | undefined;
    export function getStore(name: 'UserSettingsModalStore'): UserSettingsModalStore | undefined;
    export function getStore(name: 'UserSettingsOverridesStore'): UserSettingsOverridesStore | undefined;
    export function getStore(name: 'UserSettingsProtoStore'): UserSettingsProtoStore | undefined;
    export function getStore(name: 'UserStore'): UserStore | undefined;
    export function getStore(name: 'VerifiedKeyStore'): VerifiedKeyStore | undefined;
    export function getStore(name: 'VideoBackgroundStore'): VideoBackgroundStore | undefined;
    export function getStore(name: 'VideoQualityModeStore'): VideoQualityModeStore | undefined;
    export function getStore(name: 'VideoSpeakerStore'): VideoSpeakerStore | undefined;
    export function getStore(name: 'VideoStreamStore'): VideoStreamStore | undefined;
    export function getStore(name: 'ViewHistoryStore'): ViewHistoryStore | undefined;
    export function getStore(name: 'VirtualCurrencyStore'): VirtualCurrencyStore | undefined;
    export function getStore(name: 'VoiceChannelEffectsPersistedStore'): VoiceChannelEffectsPersistedStore | undefined;
    export function getStore(name: 'VoiceChannelEffectsStore'): VoiceChannelEffectsStore | undefined;
    export function getStore(name: 'VoiceFilterPersistedStore'): VoiceFilterPersistedStore | undefined;
    export function getStore(name: 'VoiceFilterStore'): VoiceFilterStore | undefined;
    export function getStore(name: 'VoiceStateStore'): VoiceStateStore | undefined;
    export function getStore(name: 'WarpClientStore'): WarpClientStore | undefined;
    export function getStore(name: 'WebAuthnStore'): WebAuthnStore | undefined;
    export function getStore(name: 'WebhooksStore'): WebhooksStore | undefined;
    export function getStore(name: 'WelcomeScreenStore'): WelcomeScreenStore | undefined;
    export function getStore(name: 'WindowStore'): WindowStore | undefined;
    export function getStore(name: 'WowMomentConfirmationStore'): WowMomentConfirmationStore | undefined;
    export function getStore(name: 'scheduledMessageStore'): scheduledMessageStore | undefined;
    export function getStore(name: StoreName): any;
  }
}

interface AVErrorStore {
  hasActiveErrorOfType(...args: any[]): any;
  getActiveErrors(...args: any[]): any;
  getActiveErrorsOfType(...args: any[]): any;
}

interface AccessibilityStore {
  fontScale: any;
  fontSize: any;
  isFontScaledUp: any;
  isFontScaledDown: any;
  fontScaleClass: any;
  zoom: any;
  isZoomedIn: any;
  isZoomedOut: any;
  keyboardModeEnabled: any;
  colorblindMode: any;
  lowContrastMode: any;
  saturation: any;
  contrast: any;
  desaturateUserColors: any;
  forcedColorsModalSeen: any;
  keyboardNavigationExplainerModalSeen: any;
  messageGroupSpacing: any;
  isMessageGroupSpacingIncreased: any;
  isMessageGroupSpacingDecreased: any;
  isSubmitButtonEnabled: any;
  syncProfileThemeWithUserTheme: any;
  systemPrefersReducedMotion: any;
  rawPrefersReducedMotion: any;
  useReducedMotion: any;
  systemForcedColors: any;
  syncForcedColors: any;
  useForcedColors: any;
  systemPrefersContrast: any;
  systemPrefersCrossfades: any;
  alwaysShowLinkDecorations: any;
  roleStyle: any;
  displayNameStylesEnabled: any;
  isHighContrastModeEnabled: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface ActiveJoinedThreadsStore {
  initialize(...args: any[]): any;
  hasActiveJoinedUnreadThreads(...args: any[]): any;
  getActiveUnjoinedThreadsForParent(...args: any[]): any;
  getActiveJoinedThreadsForParent(...args: any[]): any;
  getAllActiveJoinedThreads(...args: any[]): any;
  getActiveJoinedThreadsForGuild(...args: any[]): any;
  getActiveJoinedUnreadThreadsForGuild(...args: any[]): any;
  getActiveJoinedUnreadThreadsForParent(...args: any[]): any;
  getActiveJoinedRelevantThreadsForGuild(...args: any[]): any;
  getActiveJoinedRelevantThreadsForParent(...args: any[]): any;
  getActiveUnjoinedThreadsForGuild(...args: any[]): any;
  getActiveUnjoinedUnreadThreadsForGuild(...args: any[]): any;
  getActiveUnjoinedUnreadThreadsForParent(...args: any[]): any;
  getNewThreadCountsForGuild(...args: any[]): any;
  computeAllActiveJoinedThreads(...args: any[]): any;
  getNewThreadCount(...args: any[]): any;
  getActiveThreadCount(...args: any[]): any;
}

interface ActiveThreadsStore {
  initialize(...args: any[]): any;
  isActive(...args: any[]): any;
  getThreadsForGuild(...args: any[]): any;
  getThreadsForParent(...args: any[]): any;
  hasThreadsForChannel(...args: any[]): any;
  forEachGuild(...args: any[]): any;
  hasLoaded(...args: any[]): any;
}

interface ActivityInviteEducationStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  shouldShowEducation(...args: any[]): any;
}

interface ActivityInviteModalStore {
  initialize(...args: any[]): any;
  getActivity(...args: any[]): any;
  getQuery(...args: any[]): any;
  getResults(...args: any[]): any;
}

interface ActivityLauncherStore {
  getState(...args: any[]): any;
  getStates(...args: any[]): any;
}

interface ActivityShelfStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface AdyenStore {
  client: any;
  cashAppPayComponent: any;
}

interface ApexExperimentStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  processExperimentsMessage(...args: any[]): any;
  handleApexExperimentOverrideCreate(...args: any[]): any;
  handleApexExperimentOverrideDelete(...args: any[]): any;
  handleApexExperimentsMetadataFetchSuccess(...args: any[]): any;
  getExperimentsMetadata(...args: any[]): any;
  getClientOverrides(...args: any[]): any;
  getExperimentClientOverride(...args: any[]): any;
  handleLogout(...args: any[]): any;
  registerExperiment(...args: any[]): any;
  getRegisteredExperiments(...args: any[]): any;
  getAssignment(...args: any[]): any;
  getServerAssignment(...args: any[]): any;
  getEvaluation(...args: any[]): any;
  getEvaluationAndAssignment(...args: any[]): any;
  trackExperimentExposure(...args: any[]): any;
  trackCommonTriggerPointExposures(...args: any[]): any;
  trackExposureSuppression(...args: any[]): any;
  evaluationIds(...args: any[]): any;
  shouldTrackExposure(...args: any[]): any;
  loadTrackedExposures(...args: any[]): any;
  saveTrackedExposures(...args: any[]): any;
  clearAllServerAssignments(...args: any[]): any;
  clearAllOverrides(...args: any[]): any;
  clearAllTrackedExposures(...args: any[]): any;
  getHash(...args: any[]): any;
}

interface AppIconPersistedStoreState {
  isUpsellPreview: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getCurrentDesktopIcon(...args: any[]): any;
}

interface AppLauncherStore {
  initialize(...args: any[]): any;
  shouldShowPopup(...args: any[]): any;
  shouldShowModal(...args: any[]): any;
  entrypoint(...args: any[]): any;
  lastShownEntrypoint(...args: any[]): any;
  activeViewType(...args: any[]): any;
  closeReason(...args: any[]): any;
  initialState(...args: any[]): any;
  appDMChannelsWithFailedLoads(...args: any[]): any;
}

interface AppViewStore {
  initialize(...args: any[]): any;
  getHomeLink(...args: any[]): any;
}

interface ApplicationAssetsStore {
  getApplicationAssetFetchState(...args: any[]): any;
  getFetchingIds(...args: any[]): any;
  getApplicationAssets(...args: any[]): any;
}

interface ApplicationBuildStore {
  initialize(...args: any[]): any;
  getTargetBuildId(...args: any[]): any;
  getTargetManifests(...args: any[]): any;
  hasNoBuild(...args: any[]): any;
  isFetching(...args: any[]): any;
  needsToFetchBuildSize(...args: any[]): any;
  getBuildSize(...args: any[]): any;
}

interface ApplicationCommandAutocompleteStore {
  initialize(...args: any[]): any;
  getLastErrored(...args: any[]): any;
  getAutocompleteChoices(...args: any[]): any;
  getAutocompleteLastChoices(...args: any[]): any;
  getLastResponseNonce(...args: any[]): any;
}

interface ApplicationCommandFrecencyStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
  getCommandFrecencyWithoutLoadingLatest(...args: any[]): any;
  getScoreWithoutLoadingLatest(...args: any[]): any;
  getTopCommandsWithoutLoadingLatest(...args: any[]): any;
}

interface ApplicationCommandIndexStore {
  initialize(...args: any[]): any;
  getContextState(...args: any[]): any;
  hasContextStateApplication(...args: any[]): any;
  getGuildState(...args: any[]): any;
  getUserState(...args: any[]): any;
  hasUserStateApplication(...args: any[]): any;
  getApplicationState(...args: any[]): any;
  getApplicationStates(...args: any[]): any;
  hasApplicationState(...args: any[]): any;
  query(...args: any[]): any;
  queryInstallOnDemandApp(...args: any[]): any;
}

interface ApplicationCommandStore {
  initialize(...args: any[]): any;
  getActiveCommand(...args: any[]): any;
  getActiveCommandSection(...args: any[]): any;
  getActiveOptionName(...args: any[]): any;
  getActiveOption(...args: any[]): any;
  getPreferredCommandId(...args: any[]): any;
  getOptionStates(...args: any[]): any;
  getOptionState(...args: any[]): any;
  getCommandOrigin(...args: any[]): any;
  getSource(...args: any[]): any;
  getOption(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ApplicationDirectoryApplicationsStore {
  getApplication(...args: any[]): any;
  getApplicationRecord(...args: any[]): any;
  getApplications(...args: any[]): any;
  getApplicationFetchState(...args: any[]): any;
  getApplicationFetchStates(...args: any[]): any;
  isInvalidApplication(...args: any[]): any;
  getInvalidApplicationIds(...args: any[]): any;
  isFetching(...args: any[]): any;
  getApplicationLastFetchTime(...args: any[]): any;
}

interface ApplicationDirectoryCategoriesStore {
  getLastFetchTimeMs(...args: any[]): any;
  getCategories(...args: any[]): any;
  getCategory(...args: any[]): any;
}

interface ApplicationDirectorySearchStore {
  getSearchResults(...args: any[]): any;
  getFetchState(...args: any[]): any;
}

interface ApplicationDirectorySimilarApplicationsStore {
  getSimilarApplications(...args: any[]): any;
  getFetchState(...args: any[]): any;
}

interface ApplicationFrecencyStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
  getApplicationFrecencyWithoutLoadingLatest(...args: any[]): any;
  getScoreWithoutLoadingLatest(...args: any[]): any;
  getTopApplicationsWithoutLoadingLatest(...args: any[]): any;
}

interface ApplicationStatisticsStore {
  getStatisticsForApplication(...args: any[]): any;
  shouldFetchStatisticsForApplication(...args: any[]): any;
}

interface ApplicationStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  _getAllApplications(...args: any[]): any;
  getApplications(...args: any[]): any;
  getGuildApplication(...args: any[]): any;
  getGuildApplicationIds(...args: any[]): any;
  getApplication(...args: any[]): any;
  getApplicationByName(...args: any[]): any;
  getApplicationLastUpdated(...args: any[]): any;
  isFetchingApplication(...args: any[]): any;
  didFetchingApplicationFail(...args: any[]): any;
  getFetchingOrFailedFetchingIds(...args: any[]): any;
  getAppIdForBotUserId(...args: any[]): any;
}

interface ApplicationStoreDirectoryStore {
  initialize(...args: any[]): any;
  hasStorefront(...args: any[]): any;
  getStoreLayout(...args: any[]): any;
  getFetchStatus(...args: any[]): any;
}

interface ApplicationStoreLocationStore {
  getCurrentPath(...args: any[]): any;
  getCurrentRoute(...args: any[]): any;
  reset(...args: any[]): any;
}

interface ApplicationStoreSettingsStore {
  didMatureAgree: any;
}

interface ApplicationStoreUserSettingsStore {
  hasAcceptedStoreTerms: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasAcceptedEULA(...args: any[]): any;
}

interface ApplicationStreamPreviewStore {
  getPreviewURL(...args: any[]): any;
  shouldFetchPreview(...args: any[]): any;
  getPreviewURLForStreamKey(...args: any[]): any;
  getIsPreviewLoading(...args: any[]): any;
}

interface ApplicationStreamingSettingsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ApplicationStreamingStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isSelfStreamHidden(...args: any[]): any;
  getLastActiveStream(...args: any[]): any;
  getAllActiveStreams(...args: any[]): any;
  getAllActiveStreamsForChannel(...args: any[]): any;
  getActiveStreamForStreamKey(...args: any[]): any;
  getActiveStreamForApplicationStream(...args: any[]): any;
  getCurrentUserActiveStream(...args: any[]): any;
  getActiveStreamForUser(...args: any[]): any;
  getStreamerActiveStreamMetadata(...args: any[]): any;
  getStreamerActiveStreamMetadataForStream(...args: any[]): any;
  getIsActiveStreamPreviewDisabled(...args: any[]): any;
  getAnyStreamForUser(...args: any[]): any;
  getAnyDiscoverableStreamForUser(...args: any[]): any;
  getStreamForUser(...args: any[]): any;
  getRTCStream(...args: any[]): any;
  getAllApplicationStreams(...args: any[]): any;
  getAllApplicationStreamsForChannel(...args: any[]): any;
  getViewerIds(...args: any[]): any;
  getCurrentAppIntent(...args: any[]): any;
  getStreamingState(...args: any[]): any;
}

interface ApplicationSubscriptionChannelNoticeStore {
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getLastGuildDismissedTime(...args: any[]): any;
}

interface ApplicationSubscriptionStore {
  getSubscriptionGroupListingsForApplicationFetchState(...args: any[]): any;
  getSubscriptionGroupListing(...args: any[]): any;
  getSubscriptionGroupListingForSubscriptionListing(...args: any[]): any;
  getSubscriptionListing(...args: any[]): any;
  getSubscriptionListingsForApplication(...args: any[]): any;
  getEntitlementsForGuildFetchState(...args: any[]): any;
  getSubscriptionListingForPlan(...args: any[]): any;
  getApplicationEntitlementsForGuild(...args: any[]): any;
  getEntitlementsForGuild(...args: any[]): any;
}

interface ApplicationViewStore {
  applicationFilterQuery: any;
  applicationViewItems: any;
  launchableApplicationViewItems: any;
  libraryApplicationViewItems: any;
  filteredLibraryApplicationViewItems: any;
  sortedFilteredLibraryApplicationViewItems: any;
  hiddenLibraryApplicationViewItems: any;
  hasFetchedApplications: any;
  initialize(...args: any[]): any;
}

interface AppliedGuildBoostStore {
  isModifyingAppliedBoost: any;
  applyBoostError: any;
  unapplyBoostError: any;
  cooldownEndsAt: any;
  isFetchingCurrentUserAppliedBoosts: any;
  getAppliedGuildBoostsForGuild(...args: any[]): any;
  getLastFetchedAtForGuild(...args: any[]): any;
  getCurrentUserAppliedBoosts(...args: any[]): any;
  getAppliedGuildBoost(...args: any[]): any;
}

interface ArchivedThreadsStore {
  canLoadMore: any;
  nextOffset: any;
  isInitialLoad: any;
  initialize(...args: any[]): any;
  isLoading(...args: any[]): any;
  getThreads(...args: any[]): any;
}

interface AuthInviteStore {
  getGuild(...args: any[]): any;
}

interface AuthSessionsStore {
  getSessions(...args: any[]): any;
}

interface AuthorizedAppsStore {
  initialize(...args: any[]): any;
  getNewestTokenForApplication(...args: any[]): any;
  getNewestTokens(...args: any[]): any;
  getNewestTokensForNonChildrenApplications(...args: any[]): any;
  getFetchState(...args: any[]): any;
}

interface AutoUpdateStore {
  getState(...args: any[]): any;
}

interface BasicGuildStore {
  getGuild(...args: any[]): any;
  getGuildOrStatus(...args: any[]): any;
  getVersion(...args: any[]): any;
}

interface BillingInfoStore {
  isBusy: any;
  isUpdatingPaymentSource: any;
  isRemovingPaymentSource: any;
  isSyncing: any;
  isSubscriptionFetching: any;
  isPaymentSourceFetching: any;
  editSourceError: any;
  removeSourceError: any;
  ipCountryCodeLoaded: any;
  ipCountryCode: any;
  ipCountryCodeRequest: any;
  ipLocationLoaded: any;
  ipLocation: any;
  ipLocationRequest: any;
  ipLocationHasError: any;
  ipCountryCodeWithFallback: any;
  ipCountryCodeHasError: any;
  paymentSourcesFetchRequest: any;
}

interface BitRateStore {
  bitrate: any;
}

interface BraintreeStore {
  getClient(...args: any[]): any;
  getPayPalClient(...args: any[]): any;
  getVenmoClient(...args: any[]): any;
  getLastURL(...args: any[]): any;
}

interface BrowserCheckoutStateStore {
  browserCheckoutState: any;
  loadId: any;
  skuId: any;
  planId: any;
}

interface BrowserHandoffStore {
  user: any;
  key: any;
  initialize(...args: any[]): any;
  isHandoffAvailable(...args: any[]): any;
}

interface BurstReactionEffectsStore {
  getReactionPickerAnimation(...args: any[]): any;
  getEffectForEmojiId(...args: any[]): any;
}

interface CallChatToastsStore {
  initialize(...args: any[]): any;
  getToastsEnabled(...args: any[]): any;
  getState(...args: any[]): any;
}

interface CallStore {
  initialize(...args: any[]): any;
  getCall(...args: any[]): any;
  getCalls(...args: any[]): any;
  getMessageId(...args: any[]): any;
  isCallActive(...args: any[]): any;
  isCallUnavailable(...args: any[]): any;
  getInternalState(...args: any[]): any;
}

interface CategoryCollapseStore {
  version: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isCollapsed(...args: any[]): any;
  getCollapsedCategories(...args: any[]): any;
}

interface CertifiedDeviceStore {
  initialize(...args: any[]): any;
  isCertified(...args: any[]): any;
  getCertifiedDevice(...args: any[]): any;
  getCertifiedDeviceName(...args: any[]): any;
  getCertifiedDeviceByType(...args: any[]): any;
  isHardwareMute(...args: any[]): any;
  hasEchoCancellation(...args: any[]): any;
  hasNoiseSuppression(...args: any[]): any;
  hasAutomaticGainControl(...args: any[]): any;
  getVendor(...args: any[]): any;
  getModel(...args: any[]): any;
  getRevision(...args: any[]): any;
}

interface ChangelogStore {
  initialize(...args: any[]): any;
  getChangelog(...args: any[]): any;
  latestChangelogId(...args: any[]): any;
  getChangelogLoadStatus(...args: any[]): any;
  hasLoadedConfig(...args: any[]): any;
  getConfig(...args: any[]): any;
  overrideId(...args: any[]): any;
  lastSeenChangelogId(...args: any[]): any;
  lastSeenChangelogDate(...args: any[]): any;
  getStateForDebugging(...args: any[]): any;
  isLocked(...args: any[]): any;
}

interface ChannelFollowerStatsStore {
  getFollowerStatsForChannel(...args: any[]): any;
}

interface ChannelFollowingPublishBumpStore {
  initialize(...args: any[]): any;
  shouldShowBump(...args: any[]): any;
}

interface ChannelListStore {
  initialize(...args: any[]): any;
  getGuild(...args: any[]): any;
  getGuildWithoutChangingGuildActionRows(...args: any[]): any;
  recentsChannelCount(...args: any[]): any;
}

interface ChannelListUnreadsStore {
  initialize(...args: any[]): any;
  getUnreadStateForGuildId(...args: any[]): any;
}

interface ChannelListVoiceCategoryStore {
  initialize(...args: any[]): any;
  isVoiceCategoryExpanded(...args: any[]): any;
  isVoiceCategoryCollapsed(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ChannelMemberStore {
  initialize(...args: any[]): any;
  getProps(...args: any[]): any;
  getRows(...args: any[]): any;
}

interface ChannelPinsStore {
  initialize(...args: any[]): any;
  getPins(...args: any[]): any;
}

interface ChannelRTCStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getParticipantsVersion(...args: any[]): any;
  getParticipants(...args: any[]): any;
  getSpeakingParticipants(...args: any[]): any;
  getFilteredParticipants(...args: any[]): any;
  getVideoParticipants(...args: any[]): any;
  getStreamParticipants(...args: any[]): any;
  getActivityParticipants(...args: any[]): any;
  getParticipant(...args: any[]): any;
  getUserParticipantCount(...args: any[]): any;
  getParticipantsOpen(...args: any[]): any;
  getVoiceParticipantsHidden(...args: any[]): any;
  getSelectedParticipantId(...args: any[]): any;
  getSelectedParticipant(...args: any[]): any;
  getSelectedParticipantStats(...args: any[]): any;
  getGuildRingingUsers(...args: any[]): any;
  getMode(...args: any[]): any;
  getLayout(...args: any[]): any;
  getChatOpen(...args: any[]): any;
  getAllChatOpen(...args: any[]): any;
  getParticipantsListOpen(...args: any[]): any;
  isFullscreenInContext(...args: any[]): any;
  getStageStreamSize(...args: any[]): any;
  getStageVideoLimitBoostUpsellDismissed(...args: any[]): any;
}

interface ChannelSKUStore {
  getSkuIdForChannel(...args: any[]): any;
}

interface ChannelSectionStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSection(...args: any[]): any;
  getSidebarState(...args: any[]): any;
  getGuildSidebarState(...args: any[]): any;
  getCurrentSidebarChannelId(...args: any[]): any;
  getCurrentSidebarMessageId(...args: any[]): any;
}

interface ChannelSettingsIntegrationsStore {
  webhooks: any;
  editedWebhook: any;
  formState: any;
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  getWebhook(...args: any[]): any;
  showNotice(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface ChannelSettingsPermissionsStore {
  editedPermissionIds: any;
  permissionOverwrites: any;
  selectedOverwriteId: any;
  formState: any;
  isLockable: any;
  locked: any;
  channel: any;
  category: any;
  advancedMode: any;
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  showNotice(...args: any[]): any;
  getPermissionOverwrite(...args: any[]): any;
}

interface ChannelSettingsStore {
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  isOpen(...args: any[]): any;
  getSection(...args: any[]): any;
  getInvites(...args: any[]): any;
  showNotice(...args: any[]): any;
  getChannel(...args: any[]): any;
  getFormState(...args: any[]): any;
  getCategory(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface ChannelStatusStore {
  getChannelStatus(...args: any[]): any;
}

interface ChannelStore {
  initialize(...args: any[]): any;
  hasChannel(...args: any[]): any;
  getBasicChannel(...args: any[]): any;
  getChannel(...args: any[]): any;
  loadAllGuildAndPrivateChannelsFromDisk(...args: any[]): any;
  getChannelIds(...args: any[]): any;
  getMutablePrivateChannels(...args: any[]): any;
  getMutableBasicGuildChannelsForGuild(...args: any[]): any;
  getMutableGuildChannelsForGuild(...args: any[]): any;
  getSortedLinkedChannelsForGuild(...args: any[]): any;
  getSortedPrivateChannels(...args: any[]): any;
  getDMFromUserId(...args: any[]): any;
  getDMChannelFromUserId(...args: any[]): any;
  getMutableDMsByUserIds(...args: any[]): any;
  getDMUserIds(...args: any[]): any;
  getPrivateChannelsVersion(...args: any[]): any;
  getGuildChannelsVersion(...args: any[]): any;
  getAllThreadsForParent(...args: any[]): any;
  getAllThreadsForGuild(...args: any[]): any;
  getInitialOverlayState(...args: any[]): any;
  getDebugInfo(...args: any[]): any;
}

interface ChatWallpaperStore {
  isFetchingWallpapers: any;
  shouldFetchWallpapers: any;
  hasFetchedWallpapers: any;
  failedToFetchWallpapers: any;
  wallpapers: any;
  getWallpaperById(...args: any[]): any;
  isUpdatingChatWallpaperFlagForChannel(...args: any[]): any;
  getLastSetWallpaperMessageIdForChannel(...args: any[]): any;
}

interface CheckoutRecoveryStore {
  getIsTargeted(...args: any[]): any;
  shouldFetchCheckoutRecovery(...args: any[]): any;
}

interface ClickerGameStore {
  currentPoints: any;
  lifetimePoints: any;
  pointsSpent: any;
  pointsByItem: any;
  numPurchases: any;
  purchasedItems: any;
  startTime: any;
  endTime: any;
  isRedeemingPrize: any;
  volume: any;
  isMuted: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getContributionsForItem(...args: any[]): any;
  hasPurchasedItem(...args: any[]): any;
  getPurchasedItemUpgrades(...args: any[]): any;
  hasPurchasedUpgrade(...args: any[]): any;
  getNumPurchasesForItemUpgrade(...args: any[]): any;
  getPurchasedUpgradesForItem(...args: any[]): any;
  hasUnlockedAchievement(...args: any[]): any;
  getItemMetadata(...args: any[]): any;
  getLastAction(...args: any[]): any;
}

interface ClientThemesBackgroundStore {
  gradientPreset: any;
  isPreview: any;
  isCoachmark: any;
  mobilePendingThemeIndex: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLinearGradient(...args: any[]): any;
}

interface ClipsStore {
  initialize(...args: any[]): any;
  getClips(...args: any[]): any;
  getPendingClips(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getSettings(...args: any[]): any;
  getLastClipsSession(...args: any[]): any;
  getClipsWarningShown(...args: any[]): any;
  getActiveAnimation(...args: any[]): any;
  getStreamClipAnimations(...args: any[]): any;
  hasAnyClipAnimations(...args: any[]): any;
  getHardwareClassification(...args: any[]): any;
  getHardwareClassificationForDecoupled(...args: any[]): any;
  getHardwareClassificationVersion(...args: any[]): any;
  getIsAtMaxSaveClipOperations(...args: any[]): any;
  getLastClipsError(...args: any[]): any;
  isClipsEnabledForUser(...args: any[]): any;
  isVoiceRecordingAllowedForUser(...args: any[]): any;
  isViewerClippingAllowedForUser(...args: any[]): any;
  isDecoupledGameClippingEnabled(...args: any[]): any;
  hasClips(...args: any[]): any;
  hasTakenDecoupledClip(...args: any[]): any;
  getNewClipIds(...args: any[]): any;
}

interface CloudSyncStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isSyncing(...args: any[]): any;
}

interface CodedLinkNativeAppStateStore {
  getState(...args: any[]): any;
  getHighestState(...args: any[]): any;
}

interface CollapsedVoiceChannelStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getCollapsed(...args: any[]): any;
  isCollapsed(...args: any[]): any;
}

interface CollectiblesCategoryStore {
  isFetchingCategories: any;
  error: any;
  lastErrorTimestamp: any;
  lastSuccessfulFetch: any;
  lastFetchOptions: any;
  categories: any;
  products: any;
  productsWithVariantsAsGroup: any;
  recommendedGiftSkuIds: any;
  skipNumCategories: any;
  initialize(...args: any[]): any;
  isFetchingProduct(...args: any[]): any;
  getCategory(...args: any[]): any;
  getProduct(...args: any[]): any;
  getProductsBySkus(...args: any[]): any;
  getProductFetchError(...args: any[]): any;
  getProductFetchErrorTimestamp(...args: any[]): any;
  getProductByStoreListingId(...args: any[]): any;
  getCategoryByStoreListingId(...args: any[]): any;
  getCategoryForProduct(...args: any[]): any;
}

interface CollectiblesMarketingsStore {
  fetchState: any;
  getMarketingBySurface(...args: any[]): any;
}

interface CollectiblesPurchaseStore {
  isFetching: any;
  isClaiming: any;
  purchases: any;
  fetchError: any;
  claimError: any;
  hasPreviouslyFetched: any;
  getPurchase(...args: any[]): any;
}

interface CollectiblesShopHomesStore {
  getLastSuccessfulFetch(...args: any[]): any;
  getLastErrorTimestamp(...args: any[]): any;
  getLastFetchOptions(...args: any[]): any;
  getFetchShopHomeError(...args: any[]): any;
  getIsFetchingShopHome(...args: any[]): any;
  getShopBlocks(...args: any[]): any;
  getShopHomeConfigOverride(...args: any[]): any;
}

interface CollectiblesShopStore {
  analyticsLocations: any;
  analyticsSource: any;
  initialProductSkuId: any;
  getAnalytics(...args: any[]): any;
}

interface CommandsMigrationStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  shouldShowChannelNotice(...args: any[]): any;
  canShowOverviewTooltip(...args: any[]): any;
  canShowToggleTooltip(...args: any[]): any;
}

interface ConnectedAccountsStore {
  isJoining(...args: any[]): any;
  joinErrorMessage(...args: any[]): any;
  isFetching(...args: any[]): any;
  getAccounts(...args: any[]): any;
  getLocalAccounts(...args: any[]): any;
  getAccount(...args: any[]): any;
  getLocalAccount(...args: any[]): any;
  isSuggestedAccountType(...args: any[]): any;
  addPendingAuthorizedState(...args: any[]): any;
  deletePendingAuthorizedState(...args: any[]): any;
  hasPendingAuthorizedState(...args: any[]): any;
}

interface ConnectedAppsStore {
  connections: any;
  isConnected(...args: any[]): any;
  getApplication(...args: any[]): any;
  getAllConnections(...args: any[]): any;
}

interface ConnectedDeviceStore {
  initialized: any;
  lastDeviceConnected: any;
  inputDevices: any;
  lastInputSystemDevice: any;
  outputDevices: any;
  lastOutputSystemDevice: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface ConsentStore {
  consents: any;
  fetchedConsents: any;
  receivedConsentsInConnectionOpen: any;
  hasConsented(...args: any[]): any;
  getAuthenticationConsentRequired(...args: any[]): any;
}

interface ConsumablesStore {
  lastConfetti: any;
  confettiMode: any;
  getPrice(...args: any[]): any;
  isFetchingPrice(...args: any[]): any;
  getErrored(...args: any[]): any;
  getEntitlement(...args: any[]): any;
  fetchPotionCount(...args: any[]): any;
  isEntitlementFetched(...args: any[]): any;
  isEntitlementFetching(...args: any[]): any;
  getPreviousGoLiveSettings(...args: any[]): any;
}

interface ContentInventoryActivityStore {
  initialize(...args: any[]): any;
  getMatchingActivity(...args: any[]): any;
}

interface ContentInventoryDevToolsStore {
  getFakeGameToShow(...args: any[]): any;
  getFakeGameData(...args: any[]): any;
}

interface ContentInventoryOutboxStore {
  deleteOutboxEntryError: any;
  isDeletingEntryHistory: any;
  hasInitialized: any;
  getMatchingOutboxEntry(...args: any[]): any;
  getUserOutbox(...args: any[]): any;
  isFetchingUserOutbox(...args: any[]): any;
}

interface ContentInventoryPersistedStore {
  hidden: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getImpressionCappedItemIds(...args: any[]): any;
  getDebugFastImpressionCappingEnabled(...args: any[]): any;
  reset(...args: any[]): any;
}

interface ContentInventoryStore {
  getFeeds(...args: any[]): any;
  getFeed(...args: any[]): any;
  getFeedState(...args: any[]): any;
  getLastFeedFetchDate(...args: any[]): any;
  getFilters(...args: any[]): any;
  getFeedRequestId(...args: any[]): any;
  getDebugImpressionCappingDisabled(...args: any[]): any;
  getMatchingInboxEntry(...args: any[]): any;
}

interface ContextMenuStore {
  version: any;
  isOpen(...args: any[]): any;
  getContextMenu(...args: any[]): any;
  close(...args: any[]): any;
}

interface CreatorMonetizationMarketingStore {
  getEligibleGuildsForNagActivate(...args: any[]): any;
}

interface CreatorMonetizationStore {
  getPriceTiersFetchStateForGuildAndType(...args: any[]): any;
  getPriceTiersForGuildAndType(...args: any[]): any;
}

interface CustomActivityLinksStore {
  getOne(...args: any[]): any;
}

interface DCFEventStore {
  getDCFEvents(...args: any[]): any;
}

interface DataHarvestStore {
  harvestType: any;
  requestingHarvest: any;
}

interface DefaultRouteStore {
  defaultRoute: any;
  lastNonVoiceRoute: any;
  fallbackRoute: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface DetectableGameSupplementalStore {
  canFetch(...args: any[]): any;
  isFetching(...args: any[]): any;
  didFetchingFail(...args: any[]): any;
  getGame(...args: any[]): any;
  getGames(...args: any[]): any;
  getLocalizedName(...args: any[]): any;
  getThemes(...args: any[]): any;
  getCoverImageUrl(...args: any[]): any;
}

interface DetectedOffPlatformPremiumPerksStore {
  initialize(...args: any[]): any;
  getDetectedOffPlatformPremiumPerks(...args: any[]): any;
}

interface DevToolsDesignTogglesStore {
  getUserAgnosticState(...args: any[]): any;
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  set(...args: any[]): any;
  all(...args: any[]): any;
  allWithDescriptions(...args: any[]): any;
}

interface DevToolsDevSettingsStore {
  getUserAgnosticState(...args: any[]): any;
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  enabled(...args: any[]): any;
  allByCategory(...args: any[]): any;
}

interface DevToolsSettingsStore {
  sidebarWidth: any;
  lastOpenTabId: any;
  displayTools: any;
  showDevWidget: any;
  devWidgetPosition: any;
  sortedScreenKeys: any;
  isRandomlyChangingPremiumOptions: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface DeveloperActivityShelfStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getIsEnabled(...args: any[]): any;
  getLastUsedObject(...args: any[]): any;
  getUseActivityUrlOverride(...args: any[]): any;
  getActivityUrlOverride(...args: any[]): any;
  getFetchState(...args: any[]): any;
  getFilter(...args: any[]): any;
  getDeveloperShelfItems(...args: any[]): any;
  inDevModeForApplication(...args: any[]): any;
}

interface DeveloperExperimentStore {
  initialize(...args: any[]): any;
  getExperimentDescriptor(...args: any[]): any;
}

interface DeveloperOptionsStore {
  isTracingRequests: any;
  isForcedCanary: any;
  isLoggingGatewayEvents: any;
  isLoggingOverlayEvents: any;
  isLoggingAnalyticsEvents: any;
  isAxeEnabled: any;
  cssDebuggingEnabled: any;
  layoutDebuggingEnabled: any;
  sourceMapsEnabled: any;
  isAnalyticsDebuggerEnabled: any;
  isBugReporterEnabled: any;
  isIdleStatusIndicatorEnabled: any;
  onlyShowPreviewAppCollections: any;
  disableAppCollectionsCache: any;
  isStreamInfoOverlayEnabled: any;
  preventPopoutClose: any;
  logKeyboardMismatches: any;
  initialize(...args: any[]): any;
  getDebugOptionsHeaderValue(...args: any[]): any;
}

interface DeviceFrecencyStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getInputDeviceIdsSortedByFrecency(...args: any[]): any;
  getOutputDeviceIdsSortedByFrecency(...args: any[]): any;
  getVideoDeviceIdsSortedByFrecency(...args: any[]): any;
}

interface DimensionStore {
  percentageScrolled(...args: any[]): any;
  getChannelDimensions(...args: any[]): any;
  getGuildDimensions(...args: any[]): any;
  getGuildListDimensions(...args: any[]): any;
  isAtBottom(...args: any[]): any;
}

interface DismissibleContentFrameworkStore {
  dailyCapOverridden: any;
  newUserMinAgeRequiredOverridden: any;
  lastDCDismissed: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getRenderedAtTimestamp(...args: any[]): any;
  hasUserHitDCCap(...args: any[]): any;
}

interface DispatchApplicationErrorStore {
  getLastError(...args: any[]): any;
}

interface DispatchApplicationLaunchSetupStore {
  getLastProgress(...args: any[]): any;
  isRunning(...args: any[]): any;
}

interface DispatchApplicationStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isUpToDate(...args: any[]): any;
  shouldPatch(...args: any[]): any;
  isInstalled(...args: any[]): any;
  supportsCloudSync(...args: any[]): any;
  isLaunchable(...args: any[]): any;
  getDefaultLaunchOption(...args: any[]): any;
  getLaunchOptions(...args: any[]): any;
  getHistoricalTotalBytesRead(...args: any[]): any;
  getHistoricalTotalBytesDownloaded(...args: any[]): any;
  getHistoricalTotalBytesWritten(...args: any[]): any;
  whenInitialized(...args: any[]): any;
}

interface DispatchManagerStore {
  activeItems: any;
  finishedItems: any;
  paused: any;
  initialize(...args: any[]): any;
  getQueuePosition(...args: any[]): any;
  isCorruptInstallation(...args: any[]): any;
}

interface DomainMigrationStore {
  getMigrationStatus(...args: any[]): any;
}

interface DraftStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getThreadDraftWithParentMessageId(...args: any[]): any;
  getRecentlyEditedDrafts(...args: any[]): any;
  getDraft(...args: any[]): any;
  getThreadSettings(...args: any[]): any;
}

interface EditMessageStore {
  isEditing(...args: any[]): any;
  isEditingAny(...args: any[]): any;
  getEditingTextValue(...args: any[]): any;
  getEditingRichValue(...args: any[]): any;
  getEditingMessageId(...args: any[]): any;
  getEditingMessage(...args: any[]): any;
  getEditActionSource(...args: any[]): any;
}

interface EmailSettingsStore {
  getEmailSettings(...args: any[]): any;
}

interface EmbeddedActivitiesStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSelfEmbeddedActivityForChannel(...args: any[]): any;
  getSelfEmbeddedActivityForLocation(...args: any[]): any;
  getSelfEmbeddedActivities(...args: any[]): any;
  getEmbeddedActivitiesForGuild(...args: any[]): any;
  getEmbeddedActivitiesForChannel(...args: any[]): any;
  getEmbeddedActivitiesForLocation(...args: any[]): any;
  getEmbeddedActivitiesForStartingChannel(...args: any[]): any;
  getEmbeddedActivitiesByChannel(...args: any[]): any;
  getEmbeddedActivityDurationMs(...args: any[]): any;
  isLaunchingActivity(...args: any[]): any;
  getShelfActivities(...args: any[]): any;
  getShelfFetchStatus(...args: any[]): any;
  shouldFetchShelf(...args: any[]): any;
  getOrientationLockStateForApp(...args: any[]): any;
  getPipOrientationLockStateForApp(...args: any[]): any;
  getGridOrientationLockStateForApp(...args: any[]): any;
  getLayoutModeForApp(...args: any[]): any;
  getConnectedActivityChannelId(...args: any[]): any;
  getConnectedActivityLocation(...args: any[]): any;
  getActivityPanelMode(...args: any[]): any;
  getFocusedLayout(...args: any[]): any;
  getCurrentEmbeddedActivity(...args: any[]): any;
  getEmbeddedActivityForUserId(...args: any[]): any;
  hasActivityEverBeenLaunched(...args: any[]): any;
  getLaunchState(...args: any[]): any;
  getLaunchStates(...args: any[]): any;
  getActivityPopoutWindowLayout(...args: any[]): any;
}

interface EmojiStore {
  loadState: any;
  expandedSectionsByGuildIds: any;
  categories: any;
  diversitySurrogate: any;
  emojiFrecencyWithoutFetchingLatest: any;
  emojiReactionFrecencyWithoutFetchingLatest: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
  getGuildEmoji(...args: any[]): any;
  getUsableGuildEmoji(...args: any[]): any;
  getGuilds(...args: any[]): any;
  getDisambiguatedEmojiContext(...args: any[]): any;
  getSearchResultsOrder(...args: any[]): any;
  searchWithoutFetchingLatest(...args: any[]): any;
  getUsableCustomEmojiById(...args: any[]): any;
  getCustomEmojiById(...args: any[]): any;
  getTopEmoji(...args: any[]): any;
  getNewlyAddedEmoji(...args: any[]): any;
  getTopEmojisMetadata(...args: any[]): any;
  getEmojiAutosuggestion(...args: any[]): any;
  hasUsableEmojiInAnyGuild(...args: any[]): any;
  hasFavoriteEmojis(...args: any[]): any;
}

interface EnablePublicGuildUpsellNoticeStore {
  initialize(...args: any[]): any;
  isVisible(...args: any[]): any;
}

interface EntitlementStore {
  fetchingAllEntitlements: any;
  fetchedAllEntitlements: any;
  fetchedEndedEntitlements: any;
  applicationIdsFetching: any;
  applicationIdsFetched: any;
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  getGiftable(...args: any[]): any;
  getForApplication(...args: any[]): any;
  getForSku(...args: any[]): any;
  isFetchingForApplication(...args: any[]): any;
  isFetchedForApplication(...args: any[]): any;
  getForSubscription(...args: any[]): any;
  isEntitledToSku(...args: any[]): any;
  hasFetchedForApplicationIds(...args: any[]): any;
  getReverseTrialEntitlement(...args: any[]): any;
  getFractionalPremium(...args: any[]): any;
  isFractionalPremiumActive(...args: any[]): any;
  getUnactivatedFractionalPremiumUnits(...args: any[]): any;
}

interface EventDirectoryStore {
  isFetching(...args: any[]): any;
  getEventDirectoryEntries(...args: any[]): any;
  getCachedGuildByEventId(...args: any[]): any;
  getCachedGuildScheduledEventById(...args: any[]): any;
}

interface ExpandedGuildFolderStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getExpandedFolders(...args: any[]): any;
  isFolderExpanded(...args: any[]): any;
}

interface ExperimentStore {
  hasLoadedExperiments: any;
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  hasRegisteredExperiment(...args: any[]): any;
  getUserExperimentDescriptor(...args: any[]): any;
  getGuildExperimentDescriptor(...args: any[]): any;
  getUserExperimentBucket(...args: any[]): any;
  getGuildExperimentBucket(...args: any[]): any;
  getAllUserExperimentDescriptors(...args: any[]): any;
  getGuildExperiments(...args: any[]): any;
  getLoadedUserExperiment(...args: any[]): any;
  getLoadedGuildExperiment(...args: any[]): any;
  getRecentExposures(...args: any[]): any;
  getRegisteredExperiments(...args: any[]): any;
  getAllExperimentOverrideDescriptors(...args: any[]): any;
  getExperimentOverrideDescriptor(...args: any[]): any;
  getAllExperimentAssignments(...args: any[]): any;
  getSerializedState(...args: any[]): any;
  hasExperimentTrackedExposure(...args: any[]): any;
}

interface ExternalStreamingStore {
  initialize(...args: any[]): any;
  getStream(...args: any[]): any;
}

interface FalsePositiveStore {
  validContentScanVersion: any;
  getFpMessageInfo(...args: any[]): any;
  getChannelFpInfo(...args: any[]): any;
  canSubmitFpReport(...args: any[]): any;
}

interface FamilyCenterStore {
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  getSelectedTeenId(...args: any[]): any;
  getLinkedUsers(...args: any[]): any;
  getLinkTimestamp(...args: any[]): any;
  getRangeStartTimestamp(...args: any[]): any;
  getActionsForDisplayType(...args: any[]): any;
  getTotalForDisplayType(...args: any[]): any;
  getLinkCode(...args: any[]): any;
  getGuild(...args: any[]): any;
  getSelectedTab(...args: any[]): any;
  getStartId(...args: any[]): any;
  getIsInitialized(...args: any[]): any;
  getUserCountry(...args: any[]): any;
  isLoading(...args: any[]): any;
  canRefetch(...args: any[]): any;
}

interface FavoriteStore {
  favoriteServerMuted: any;
  initialize(...args: any[]): any;
  getFavoriteChannels(...args: any[]): any;
  isFavorite(...args: any[]): any;
  getFavorite(...args: any[]): any;
  getCategoryRecord(...args: any[]): any;
  getNickname(...args: any[]): any;
}

interface FavoritesSuggestionStore {
  initialize(...args: any[]): any;
  getSuggestedChannelId(...args: any[]): any;
  getState(...args: any[]): any;
}

interface FeedbackOverrideStore {
  initialize(...args: any[]): any;
  getFeedbackConfig(...args: any[]): any;
}

interface FirstPartyRichPresenceStore {
  initialize(...args: any[]): any;
  getActivities(...args: any[]): any;
}

interface ForumActivePostStore {
  initialize(...args: any[]): any;
  getNewThreadCount(...args: any[]): any;
  getCanAckThreads(...args: any[]): any;
  getThreadIds(...args: any[]): any;
  getCurrentThreadIds(...args: any[]): any;
  getAndDeleteMostRecentUserCreatedThreadId(...args: any[]): any;
  getFirstNoReplyThreadId(...args: any[]): any;
}

interface ForumChannelAdminOnboardingGuideStore {
  initialize(...args: any[]): any;
  hasHidden(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ForumPostMessagesStore {
  initialize(...args: any[]): any;
  isLoading(...args: any[]): any;
  getMessage(...args: any[]): any;
}

interface ForumPostUnreadCountStore {
  initialize(...args: any[]): any;
  getCount(...args: any[]): any;
  getThreadIdsMissingCounts(...args: any[]): any;
}

interface ForumSearchStore {
  getSearchQuery(...args: any[]): any;
  getSearchLoading(...args: any[]): any;
  getSearchResults(...args: any[]): any;
  getHasSearchResults(...args: any[]): any;
}

interface FramesStore {
  getConnectedFrame(...args: any[]): any;
  getFrameLayoutMode(...args: any[]): any;
  isFrameActive(...args: any[]): any;
}

interface FrecencyStore {
  frecencyWithoutFetchingLatest: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
  getFrequentlyWithoutFetchingLatest(...args: any[]): any;
  getScoreWithoutFetchingLatest(...args: any[]): any;
  getScoreForDMWithoutFetchingLatest(...args: any[]): any;
  getMaxScore(...args: any[]): any;
  getBonusScore(...args: any[]): any;
}

interface FriendSuggestionStore {
  initialize(...args: any[]): any;
  getSuggestionCount(...args: any[]): any;
  getSuggestions(...args: any[]): any;
  getSuggestion(...args: any[]): any;
}

interface FriendsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface GIFPickerViewStore {
  getAnalyticsID(...args: any[]): any;
  getQuery(...args: any[]): any;
  getResultQuery(...args: any[]): any;
  getResultItems(...args: any[]): any;
  getTrendingCategories(...args: any[]): any;
  getSelectedFormat(...args: any[]): any;
  getSuggestions(...args: any[]): any;
  getTrendingSearchTerms(...args: any[]): any;
}

interface GameConsoleStore {
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getDevicesForPlatform(...args: any[]): any;
  getLastSelectedDeviceByPlatform(...args: any[]): any;
  getDevice(...args: any[]): any;
  getFetchingDevices(...args: any[]): any;
  getPendingDeviceCommands(...args: any[]): any;
  getRemoteSessionId(...args: any[]): any;
  getAwaitingRemoteSessionInfo(...args: any[]): any;
}

interface GameInviteStore {
  getInvites(...args: any[]): any;
  getInviteStatuses(...args: any[]): any;
  isInviteGameInstalled(...args: any[]): any;
  isInviteJoinable(...args: any[]): any;
  getLastUnseenInvite(...args: any[]): any;
  getUnseenInviteCount(...args: any[]): any;
}

interface GameLibraryViewStore {
  sortDirection: any;
  sortKey: any;
  activeRowKey: any;
  isNavigatingByKeyboard: any;
  initialize(...args: any[]): any;
}

interface GamePartyStore {
  initialize(...args: any[]): any;
  getParty(...args: any[]): any;
  getUserParties(...args: any[]): any;
  getParties(...args: any[]): any;
}

interface GameRelationshipStore {
  initialize(...args: any[]): any;
  getPendingIncomingCount(...args: any[]): any;
  getPendingOutgoingCount(...args: any[]): any;
  getGameFriendCount(...args: any[]): any;
  getGameFriendsForApplication(...args: any[]): any;
  getGameRelationshipsForUser(...args: any[]): any;
  getGameRelationshipsForUserByType(...args: any[]): any;
  getGameFriendsForUser(...args: any[]): any;
  getGameRelationshipCount(...args: any[]): any;
  getGameRelationships(...args: any[]): any;
  getGameRelationshipsByType(...args: any[]): any;
  getGameRelationshipsVersion(...args: any[]): any;
}

interface GameStore {
  games: any;
  fetching: any;
  detectableGamesEtag: any;
  lastFetched: any;
  detectableGamesTtl: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getDetectableGame(...args: any[]): any;
  getGameByName(...args: any[]): any;
  isGameInDatabase(...args: any[]): any;
  canFetchDetectableGames(...args: any[]): any;
  getGameByExecutable(...args: any[]): any;
  getGameByGameData(...args: any[]): any;
  shouldReport(...args: any[]): any;
  markGameReported(...args: any[]): any;
}

interface GatedChannelStore {
  initialize(...args: any[]): any;
  isChannelGated(...args: any[]): any;
  isChannelGatedAndVisible(...args: any[]): any;
  isChannelOrThreadParentGated(...args: any[]): any;
}

interface GatewayConnectionStore {
  initialize(...args: any[]): any;
  getSocket(...args: any[]): any;
  isTryingToConnect(...args: any[]): any;
  isConnected(...args: any[]): any;
  isConnectedOrOverlay(...args: any[]): any;
  lastTimeConnectedChanged(...args: any[]): any;
}

interface GeoRestrictedGuildStore {
  getGeoRestrictedGuilds(...args: any[]): any;
}

interface GiftCodeStore {
  get(...args: any[]): any;
  getError(...args: any[]): any;
  getForGifterSKUAndPlan(...args: any[]): any;
  getIsResolving(...args: any[]): any;
  getIsResolved(...args: any[]): any;
  getIsAccepting(...args: any[]): any;
  getUserGiftCodesFetchingForSKUAndPlan(...args: any[]): any;
  getUserGiftCodesLoadedAtForSKUAndPlan(...args: any[]): any;
  getResolvingCodes(...args: any[]): any;
  getResolvedCodes(...args: any[]): any;
  getAcceptingCodes(...args: any[]): any;
}

interface GlobalDiscoveryServersSearchCountStore {
  getIsInitialFetchComplete(...args: any[]): any;
  getIsFetchingCounts(...args: any[]): any;
  getCounts(...args: any[]): any;
}

interface GlobalDiscoveryServersSearchLayoutStore {
  initialize(...args: any[]): any;
  getVisibleTabs(...args: any[]): any;
}

interface GlobalDiscoveryServersSearchResultsStore {
  getGuild(...args: any[]): any;
  getGuildIds(...args: any[]): any;
  getIsFetching(...args: any[]): any;
  getIsInitialFetchComplete(...args: any[]): any;
  getOffset(...args: any[]): any;
  getTotal(...args: any[]): any;
  getLastFetchTimestamp(...args: any[]): any;
  getError(...args: any[]): any;
  getErrorMessage(...args: any[]): any;
}

interface GuildAffinitiesStore {
  affinities: any;
  hasRequestResolved: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getGuildAffinity(...args: any[]): any;
}

interface GuildAutomodMessageStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getMessage(...args: any[]): any;
  getMessagesVersion(...args: any[]): any;
  getMentionRaidDetected(...args: any[]): any;
  getLastIncidentAlertMessage(...args: any[]): any;
}

interface GuildAvailabilityStore {
  totalGuilds: any;
  totalUnavailableGuilds: any;
  unavailableGuilds: any;
  initialize(...args: any[]): any;
  isUnavailable(...args: any[]): any;
}

interface GuildBoostSlotStore {
  hasFetched: any;
  isFetching: any;
  boostSlots: any;
  initialize(...args: any[]): any;
  getGuildBoostSlot(...args: any[]): any;
}

interface GuildBoostingNoticeStore {
  initialize(...args: any[]): any;
  channelNoticePredicate(...args: any[]): any;
}

interface GuildBoostingProgressBarPersistedStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getCountForGuild(...args: any[]): any;
}

interface GuildCategoryStore {
  initialize(...args: any[]): any;
  getCategories(...args: any[]): any;
}

interface GuildChannelStore {
  initialize(...args: any[]): any;
  getAllGuilds(...args: any[]): any;
  getChannels(...args: any[]): any;
  getFirstChannelOfType(...args: any[]): any;
  getFirstChannel(...args: any[]): any;
  getDefaultChannel(...args: any[]): any;
  getSFWDefaultChannel(...args: any[]): any;
  getSelectableChannelIds(...args: any[]): any;
  getSelectableChannels(...args: any[]): any;
  getVocalChannelIds(...args: any[]): any;
  getDirectoryChannelIds(...args: any[]): any;
  hasSelectableChannel(...args: any[]): any;
  hasElevatedPermissions(...args: any[]): any;
  hasChannels(...args: any[]): any;
  hasCategories(...args: any[]): any;
  getTextChannelNameDisambiguations(...args: any[]): any;
}

interface GuildDirectorySearchStore {
  getSearchState(...args: any[]): any;
  getSearchResults(...args: any[]): any;
  shouldFetch(...args: any[]): any;
}

interface GuildDirectoryStore {
  isFetching(...args: any[]): any;
  getCurrentCategoryId(...args: any[]): any;
  getDirectoryEntries(...args: any[]): any;
  getDirectoryEntry(...args: any[]): any;
  getDirectoryAllEntriesCount(...args: any[]): any;
  getDirectoryCategoryCounts(...args: any[]): any;
  getAdminGuildEntryIds(...args: any[]): any;
}

interface GuildDiscoveryCategoryStore {
  getPrimaryCategories(...args: any[]): any;
  getDiscoveryCategories(...args: any[]): any;
  getClanDiscoveryCategories(...args: any[]): any;
  getAllCategories(...args: any[]): any;
  getFetchedLocale(...args: any[]): any;
  getCategoryName(...args: any[]): any;
}

interface GuildIdentitySettingsStore {
  getFormState(...args: any[]): any;
  getErrors(...args: any[]): any;
  showNotice(...args: any[]): any;
  getIsSubmitDisabled(...args: any[]): any;
  getPendingAvatar(...args: any[]): any;
  getPendingAvatarDecoration(...args: any[]): any;
  getPendingProfileEffectId(...args: any[]): any;
  getPendingBanner(...args: any[]): any;
  getPendingBio(...args: any[]): any;
  getPendingNickname(...args: any[]): any;
  getPendingPronouns(...args: any[]): any;
  getPendingAccentColor(...args: any[]): any;
  getPendingThemeColors(...args: any[]): any;
  getPendingNameplate(...args: any[]): any;
  getAllPending(...args: any[]): any;
  getGuild(...args: any[]): any;
  getSource(...args: any[]): any;
}

interface GuildIncidentsStore {
  initialize(...args: any[]): any;
  getGuildIncident(...args: any[]): any;
  getIncidentsByGuild(...args: any[]): any;
  getGuildAlertSettings(...args: any[]): any;
}

interface GuildJoinRequestStoreV2 {
  getRequest(...args: any[]): any;
  getRequests(...args: any[]): any;
  getSubmittedGuildJoinRequestTotal(...args: any[]): any;
  isFetching(...args: any[]): any;
  hasFetched(...args: any[]): any;
  getSelectedApplicationTab(...args: any[]): any;
  getSelectedSortOrder(...args: any[]): any;
  getSelectedGuildJoinRequest(...args: any[]): any;
}

interface GuildLeaderboardRanksStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getPrevLeaderboardRanks(...args: any[]): any;
  getCurrentLeaderboardRanks(...args: any[]): any;
  reset(...args: any[]): any;
}

interface GuildLeaderboardStore {
  getLeaderboards(...args: any[]): any;
  get(...args: any[]): any;
  getLeaderboardResponse(...args: any[]): any;
}

interface GuildMFAWarningStore {
  initialize(...args: any[]): any;
  isVisible(...args: any[]): any;
}

interface GuildMemberCountStore {
  getMemberCounts(...args: any[]): any;
  getMemberCount(...args: any[]): any;
  getOnlineCount(...args: any[]): any;
}

interface GuildMemberRequesterStore {
  initialize(...args: any[]): any;
  requestMember(...args: any[]): any;
}

interface GuildMemberStore {
  initialize(...args: any[]): any;
  getMutableAllGuildsAndMembers(...args: any[]): any;
  memberOf(...args: any[]): any;
  getNicknameGuildsMapping(...args: any[]): any;
  getNicknames(...args: any[]): any;
  isMember(...args: any[]): any;
  isGuestOrLurker(...args: any[]): any;
  isCurrentUserGuest(...args: any[]): any;
  getMemberIds(...args: any[]): any;
  getMembers(...args: any[]): any;
  getTrueMember(...args: any[]): any;
  getMember(...args: any[]): any;
  getSelfMember(...args: any[]): any;
  getSelfMemberJoinedAt(...args: any[]): any;
  getCachedSelfMember(...args: any[]): any;
  getNick(...args: any[]): any;
  getCommunicationDisabledUserMap(...args: any[]): any;
  getCommunicationDisabledVersion(...args: any[]): any;
  getPendingRoleUpdates(...args: any[]): any;
  getMemberRoleWithPendingUpdates(...args: any[]): any;
  getMemberVersion(...args: any[]): any;
}

interface GuildNSFWAgreeStore {
  initialize(...args: any[]): any;
  didAgree(...args: any[]): any;
}

interface GuildOnboardingHomeNavigationStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSelectedResourceChannelId(...args: any[]): any;
  getHomeNavigationChannelId(...args: any[]): any;
}

interface GuildOnboardingHomeSettingsStore {
  getSettings(...args: any[]): any;
  getNewMemberActions(...args: any[]): any;
  getActionForChannel(...args: any[]): any;
  hasMemberAction(...args: any[]): any;
  getResourceChannels(...args: any[]): any;
  getResourceForChannel(...args: any[]): any;
  getIsLoading(...args: any[]): any;
  getWelcomeMessage(...args: any[]): any;
  hasSettings(...args: any[]): any;
  getEnabled(...args: any[]): any;
  getNewMemberAction(...args: any[]): any;
}

interface GuildOnboardingMemberActionStore {
  getCompletedActions(...args: any[]): any;
  hasCompletedActionForChannel(...args: any[]): any;
  getState(...args: any[]): any;
}

interface GuildOnboardingPromptsStore {
  initialize(...args: any[]): any;
  getOnboardingPromptsForOnboarding(...args: any[]): any;
  getOnboardingPrompts(...args: any[]): any;
  getOnboardingResponses(...args: any[]): any;
  getSelectedOptions(...args: any[]): any;
  getOnboardingResponsesForPrompt(...args: any[]): any;
  getEnabledOnboardingPrompts(...args: any[]): any;
  getDefaultChannelIds(...args: any[]): any;
  getEnabled(...args: any[]): any;
  getOnboardingPrompt(...args: any[]): any;
  isLoading(...args: any[]): any;
  shouldFetchPrompts(...args: any[]): any;
  getPendingResponseOptions(...args: any[]): any;
  ackIdForGuild(...args: any[]): any;
  lastFetchedAt(...args: any[]): any;
  isAdvancedMode(...args: any[]): any;
}

interface GuildOnboardingStore {
  shouldShowOnboarding(...args: any[]): any;
  getOnboardingStatus(...args: any[]): any;
  resetOnboardingStatus(...args: any[]): any;
  getCurrentOnboardingStep(...args: any[]): any;
}

interface GuildPowerupsNotificationStore {
  getState(...args: any[]): any;
  initialize(...args: any[]): any;
  getNotificationStateForGuild(...args: any[]): any;
}

interface GuildPowerupsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getStateForGuild(...args: any[]): any;
  shouldFetchCatalogForGuild(...args: any[]): any;
  shouldFetchPowerupsForGuild(...args: any[]): any;
  hasFetchedPowerupCatalog(...args: any[]): any;
  hasFetchedUnlockedPowerups(...args: any[]): any;
}

interface GuildProductsStore {
  getGuildProductsForGuildFetchState(...args: any[]): any;
  getGuildProduct(...args: any[]): any;
  getGuildProductsForGuild(...args: any[]): any;
  getGuildProductFetchState(...args: any[]): any;
  isGuildProductsCacheExpired(...args: any[]): any;
}

interface GuildProfileStore {
  getProfile(...args: any[]): any;
  getFetchStatus(...args: any[]): any;
  getLastSyncTimestamp(...args: any[]): any;
  getIsUpdating(...args: any[]): any;
  getErrorCode(...args: any[]): any;
}

interface GuildPromptsStore {
  initialize(...args: any[]): any;
  hasViewedPrompt(...args: any[]): any;
  getState(...args: any[]): any;
}

interface GuildReadStateStore {
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  hasAnyUnread(...args: any[]): any;
  getStoreChangeSentinel(...args: any[]): any;
  getMutableUnreadGuilds(...args: any[]): any;
  getMutableGuildStates(...args: any[]): any;
  hasUnread(...args: any[]): any;
  getMentionCount(...args: any[]): any;
  getIsMentionLowImportance(...args: any[]): any;
  getGuildHasUnreadIgnoreMuted(...args: any[]): any;
  getTotalMentionCount(...args: any[]): any;
  getTotalNotificationsMentionCount(...args: any[]): any;
  getPrivateChannelMentionCount(...args: any[]): any;
  getMentionCountForPrivateChannel(...args: any[]): any;
  getGuildChangeSentinel(...args: any[]): any;
}

interface GuildRoleConnectionEligibilityStore {
  getGuildRoleConnectionEligibility(...args: any[]): any;
}

interface GuildRoleConnectionsConfigurationStore {
  initialize(...args: any[]): any;
  getGuildRoleConnectionsConfiguration(...args: any[]): any;
}

interface GuildRoleMemberCountStore {
  getRoleMemberCount(...args: any[]): any;
  shouldFetch(...args: any[]): any;
}

interface GuildRoleStore {
  serializeAllGuildRoles(...args: any[]): any;
  getUnsafeMutableRoles(...args: any[]): any;
  getManyRoles(...args: any[]): any;
  getRole(...args: any[]): any;
  getNumRoles(...args: any[]): any;
  getEveryoneRole(...args: any[]): any;
}

interface GuildRoleSubscriptionTierTemplatesStore {
  getTemplates(...args: any[]): any;
  getTemplateWithCategory(...args: any[]): any;
  getChannel(...args: any[]): any;
}

interface GuildRoleSubscriptionsStore {
  getSubscriptionGroupListingsForGuildFetchState(...args: any[]): any;
  getDidFetchListingForSubscriptionPlanId(...args: any[]): any;
  getSubscriptionGroupListing(...args: any[]): any;
  getSubscriptionGroupListingsForGuild(...args: any[]): any;
  getSubscriptionGroupListingForSubscriptionListing(...args: any[]): any;
  getSubscriptionListing(...args: any[]): any;
  getSubscriptionListingsForGuild(...args: any[]): any;
  getSubscriptionListingForPlan(...args: any[]): any;
  getSubscriptionSettings(...args: any[]): any;
  getSubscriptionTrial(...args: any[]): any;
  getMonetizationRestrictions(...args: any[]): any;
  getMonetizationRestrictionsFetchState(...args: any[]): any;
  getApplicationIdForGuild(...args: any[]): any;
}

interface GuildScheduledEventStore {
  getGuildScheduledEvent(...args: any[]): any;
  getGuildEventCountByIndex(...args: any[]): any;
  getGuildScheduledEventsForGuild(...args: any[]): any;
  getGuildScheduledEventsByIndex(...args: any[]): any;
  getRsvpVersion(...args: any[]): any;
  getRsvp(...args: any[]): any;
  isInterestedInEventRecurrence(...args: any[]): any;
  getUserCount(...args: any[]): any;
  hasUserCount(...args: any[]): any;
  isActive(...args: any[]): any;
  getActiveEventByChannel(...args: any[]): any;
  getUsersForGuildEvent(...args: any[]): any;
}

interface GuildSettingsAuditLogStore {
  logs: any;
  integrations: any;
  webhooks: any;
  guildScheduledEvents: any;
  automodRules: any;
  threads: any;
  applicationCommands: any;
  isInitialLoading: any;
  isLoading: any;
  isLoadingNextPage: any;
  hasOlderLogs: any;
  hasError: any;
  userIds: any;
  userIdFilter: any;
  targetIdFilter: any;
  actionFilter: any;
  deletedTargets: any;
  groupedFetchCount: any;
  initialize(...args: any[]): any;
}

interface GuildSettingsEmojiStore {
  initialize(...args: any[]): any;
  isUploadingEmoji(...args: any[]): any;
  getEmojiRevision(...args: any[]): any;
  getEmojis(...args: any[]): any;
  getEmojiFileInputAutoOpen(...args: any[]): any;
}

interface GuildSettingsIntegrationsStore {
  guild: any;
  integrations: any;
  webhooks: any;
  editedCommandId: any;
  editedIntegration: any;
  editedWebhook: any;
  formState: any;
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  getErrors(...args: any[]): any;
  getSection(...args: any[]): any;
  getSectionId(...args: any[]): any;
  getIntegration(...args: any[]): any;
  getWebhook(...args: any[]): any;
  isFetching(...args: any[]): any;
  showNotice(...args: any[]): any;
  getApplication(...args: any[]): any;
}

interface GuildSettingsRolesStore {
  errorMessage: any;
  hasSortChanges: any;
  hasRoleConfigurationChanges: any;
  guild: any;
  editedRoleIds: any;
  editedRoleIdsForConfigurations: any;
  roles: any;
  formState: any;
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  getRoleStyleData(...args: any[]): any;
  getSortDeltas(...args: any[]): any;
  showNotice(...args: any[]): any;
  getRole(...args: any[]): any;
  getPermissionSearchQuery(...args: any[]): any;
  getEditedRoleConnectionConfigurationsMap(...args: any[]): any;
}

interface GuildSettingsStore {
  initialize(...args: any[]): any;
  getMetadata(...args: any[]): any;
  widgetHasChanges(...args: any[]): any;
  hasChanges(...args: any[]): any;
  isOpen(...args: any[]): any;
  getSavedRouteState(...args: any[]): any;
  getSection(...args: any[]): any;
  showNotice(...args: any[]): any;
  getGuildId(...args: any[]): any;
  showPublicSuccessModal(...args: any[]): any;
  getGuild(...args: any[]): any;
  getGuildProfile(...args: any[]): any;
  getWidget(...args: any[]): any;
  isSubmitting(...args: any[]): any;
  isGuildMetadataLoaded(...args: any[]): any;
  getErrors(...args: any[]): any;
  getError(...args: any[]): any;
  getProfileError(...args: any[]): any;
  getSelectedRoleId(...args: any[]): any;
  getSlug(...args: any[]): any;
  getBans(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface GuildStore {
  getGuildCount(...args: any[]): any;
}

interface GuildSubscriptionsStore {
  initialize(...args: any[]): any;
  getSubscribedThreadIds(...args: any[]): any;
  isSubscribedToThreads(...args: any[]): any;
  isSubscribedToAnyMember(...args: any[]): any;
  isSubscribedToMemberUpdates(...args: any[]): any;
  isSubscribedToAnyGuildChannel(...args: any[]): any;
}

interface GuildTagChangedCoachmarkStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getGuildLastSeenInfo(...args: any[]): any;
}

interface GuildTemplateStore {
  getGuildTemplate(...args: any[]): any;
  getGuildTemplates(...args: any[]): any;
  getForGuild(...args: any[]): any;
  getDisplayedGuildTemplateCode(...args: any[]): any;
}

interface GuildTemplateTooltipStore {
  shouldShowGuildTemplateDirtyTooltip(...args: any[]): any;
  shouldShowGuildTemplatePromotionTooltip(...args: any[]): any;
}

interface GuildVerificationStore {
  initialize(...args: any[]): any;
  getCheck(...args: any[]): any;
  canChatInGuild(...args: any[]): any;
}

interface HangStatusStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getCurrentHangStatus(...args: any[]): any;
  getCustomHangStatus(...args: any[]): any;
  getRecentCustomStatuses(...args: any[]): any;
  getCurrentDefaultStatus(...args: any[]): any;
  getHangStatusActivity(...args: any[]): any;
}

interface HighFiveStore {
  initialize(...args: any[]): any;
  getWaitingHighFive(...args: any[]): any;
  getCompletedHighFive(...args: any[]): any;
  getEnabled(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface HookErrorStore {
  getHookError(...args: any[]): any;
}

interface HotspotStore {
  initialize(...args: any[]): any;
  hasHotspot(...args: any[]): any;
  hasHiddenHotspot(...args: any[]): any;
  getHotspotOverride(...args: any[]): any;
  getState(...args: any[]): any;
}

interface HubLinkNoticeStore {
  initialize(...args: any[]): any;
  channelNoticePredicate(...args: any[]): any;
}

interface HypeSquadStore {
  getHouseMembership(...args: any[]): any;
}

interface IdleStore {
  isIdle(...args: any[]): any;
  isAFK(...args: any[]): any;
  getIdleSince(...args: any[]): any;
  getSystemSuspended(...args: any[]): any;
  getSystemLocked(...args: any[]): any;
}

interface IgnoreNoticeStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getIgnoreTimestamps(...args: any[]): any;
}

interface ImpersonateStore {
  initialize(...args: any[]): any;
  hasViewingRoles(...args: any[]): any;
  isViewingRoles(...args: any[]): any;
  getViewingRoles(...args: any[]): any;
  getViewingRolesTimestamp(...args: any[]): any;
  getData(...args: any[]): any;
  isFullServerPreview(...args: any[]): any;
  isOptInEnabled(...args: any[]): any;
  isOnboardingEnabled(...args: any[]): any;
  getViewingChannels(...args: any[]): any;
  getOnboardingResponses(...args: any[]): any;
  getMemberOptions(...args: any[]): any;
  isChannelOptedIn(...args: any[]): any;
  isViewingServerShop(...args: any[]): any;
  getImpersonateType(...args: any[]): any;
  getBackNavigationSection(...args: any[]): any;
}

interface IncomingCallStore {
  initialize(...args: any[]): any;
  getIncomingCalls(...args: any[]): any;
  getIncomingCallChannelIds(...args: any[]): any;
  getFirstIncomingCallId(...args: any[]): any;
  hasIncomingCalls(...args: any[]): any;
}

interface InstallationManagerStore {
  defaultInstallationPath: any;
  installationPaths: any;
  installationPathsMetadata: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasGamesInstalledInPath(...args: any[]): any;
  shouldBeInstalled(...args: any[]): any;
  getInstallationPath(...args: any[]): any;
  getLabelFromPath(...args: any[]): any;
}

interface InstanceIdStore {
  getId(...args: any[]): any;
}

interface InstantInviteStore {
  getInvite(...args: any[]): any;
  getFriendInvite(...args: any[]): any;
  getFriendInvitesFetching(...args: any[]): any;
  canRevokeFriendInvite(...args: any[]): any;
}

interface IntegrationQueryStore {
  getResults(...args: any[]): any;
  getQuery(...args: any[]): any;
}

interface InteractionModalStore {
  getModalState(...args: any[]): any;
}

interface InteractionStore {
  getInteraction(...args: any[]): any;
  getMessageInteractionStates(...args: any[]): any;
  canQueueInteraction(...args: any[]): any;
  getIFrameModalApplicationId(...args: any[]): any;
  getIFrameModalKey(...args: any[]): any;
}

interface InviteModalStore {
  initialize(...args: any[]): any;
  isOpen(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface InviteNoticeStore {
  initialize(...args: any[]): any;
  channelNoticePredicate(...args: any[]): any;
}

interface InviteStore {
  getInvite(...args: any[]): any;
  getInviteError(...args: any[]): any;
  getInvites(...args: any[]): any;
  getInviteKeyForGuildId(...args: any[]): any;
}

interface JoinedThreadsStore {
  hasJoined(...args: any[]): any;
  joinTimestamp(...args: any[]): any;
  flags(...args: any[]): any;
  getInitialOverlayState(...args: any[]): any;
  getMuteConfig(...args: any[]): any;
  getMutedThreads(...args: any[]): any;
  isMuted(...args: any[]): any;
}

interface KeybindsStore {
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  hasKeybind(...args: any[]): any;
  hasExactKeybind(...args: any[]): any;
  getKeybindForAction(...args: any[]): any;
  getOverlayKeybind(...args: any[]): any;
  getOverlayChatKeybind(...args: any[]): any;
}

interface KeywordFilterStore {
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  getKeywordTrie(...args: any[]): any;
  initializeForKeywordTests(...args: any[]): any;
}

interface LabFeatureStore {
  getUserAgnosticState(...args: any[]): any;
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  set(...args: any[]): any;
}

interface LaunchableGameStore {
  launchingGames: any;
  launchableGames: any;
  isLaunchable(...args: any[]): any;
}

interface LayerStore {
  hasLayers(...args: any[]): any;
  getLayers(...args: any[]): any;
}

interface LayoutStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLayouts(...args: any[]): any;
  getLayout(...args: any[]): any;
  getAllWidgets(...args: any[]): any;
  getWidget(...args: any[]): any;
  getWidgetsForLayout(...args: any[]): any;
  getAllUnpinnedPinnedWidgets(...args: any[]): any;
  getWidgetConfig(...args: any[]): any;
  getWidgetDefaultSettings(...args: any[]): any;
  getWidgetType(...args: any[]): any;
  getRegisteredWidgets(...args: any[]): any;
  getDefaultLayout(...args: any[]): any;
}

interface LibraryApplicationStatisticsStore {
  applicationStatistics: any;
  lastFetched: any;
  getGameDuration(...args: any[]): any;
  getLastPlayedDateTime(...args: any[]): any;
  hasApplicationStatistic(...args: any[]): any;
  getCurrentUserStatisticsForApplication(...args: any[]): any;
  getQuickSwitcherScoreForApplication(...args: any[]): any;
}

interface LibraryApplicationStore {
  libraryApplications: any;
  fetched: any;
  entitledBranchIds: any;
  hasRemovedLibraryApplicationThisSession: any;
  initialize(...args: any[]): any;
  getAllLibraryApplications(...args: any[]): any;
  hasLibraryApplication(...args: any[]): any;
  hasApplication(...args: any[]): any;
  getLibraryApplication(...args: any[]): any;
  getActiveLibraryApplication(...args: any[]): any;
  isUpdatingFlags(...args: any[]): any;
  getActiveLaunchOptionId(...args: any[]): any;
  whenInitialized(...args: any[]): any;
}

interface LiveChannelNoticesStore {
  initialize(...args: any[]): any;
  isLiveChannelNoticeHidden(...args: any[]): any;
  getState(...args: any[]): any;
}

interface LocalActivityStore {
  initialize(...args: any[]): any;
  getActivities(...args: any[]): any;
  getPrimaryActivity(...args: any[]): any;
  getApplicationActivity(...args: any[]): any;
  getCustomStatusActivity(...args: any[]): any;
  findActivity(...args: any[]): any;
  getApplicationActivities(...args: any[]): any;
  getActivityForPID(...args: any[]): any;
}

interface LocalInteractionComponentStateStore {
  getInteractionComponentStates(...args: any[]): any;
  getInteractionComponentStateVersion(...args: any[]): any;
  getInteractionComponentState(...args: any[]): any;
}

interface LocaleStore {
  locale: any;
  systemLocale: any;
  initialize(...args: any[]): any;
}

interface LoginRequiredActionStore {
  initialize(...args: any[]): any;
  requiredActions(...args: any[]): any;
  requiredActionsIncludes(...args: any[]): any;
  wasLoginAttemptedInSession(...args: any[]): any;
  getState(...args: any[]): any;
}

interface LurkerModePopoutStore {
  initialize(...args: any[]): any;
  shouldShowPopout(...args: any[]): any;
}

interface LurkingStore {
  initialize(...args: any[]): any;
  lurkingGuildIds(...args: any[]): any;
  mostRecentLurkedGuildId(...args: any[]): any;
  isLurking(...args: any[]): any;
  getLurkingSource(...args: any[]): any;
  getLoadId(...args: any[]): any;
}

interface MFAStore {
  togglingSMS: any;
  hasSeenBackupPrompt: any;
  getVerificationKey(...args: any[]): any;
  getBackupCodes(...args: any[]): any;
  getNonces(...args: any[]): any;
}

interface MaintenanceStore {
  initialize(...args: any[]): any;
  getIncident(...args: any[]): any;
  getScheduledMaintenance(...args: any[]): any;
}

interface MaskedLinkStore {
  initialize(...args: any[]): any;
  isTrustedDomain(...args: any[]): any;
  isTrustedProtocol(...args: any[]): any;
}

interface MaxMemberCountChannelNoticeStore {
  initialize(...args: any[]): any;
  isVisible(...args: any[]): any;
}

interface MediaEngineStatsStore {
  getConnectionStats(...args: any[]): any;
  getLastConnectionStats(...args: any[]): any;
  getStatsHistory(...args: any[]): any;
  getAccumulatedPerformanceStats(...args: any[]): any;
}

interface MediaEngineStore {
  initialize(...args: any[]): any;
  supports(...args: any[]): any;
  supportsInApp(...args: any[]): any;
  isSupported(...args: any[]): any;
  isExperimentalEncodersSupported(...args: any[]): any;
  isNoiseSuppressionSupported(...args: any[]): any;
  isNoiseCancellationSupported(...args: any[]): any;
  isNoiseCancellationError(...args: any[]): any;
  isAutomaticGainControlSupported(...args: any[]): any;
  shouldOfferManualSubsystemSelection(...args: any[]): any;
  showBypassSystemInputProcessing(...args: any[]): any;
  isAdvancedVoiceActivitySupported(...args: any[]): any;
  isAecDumpSupported(...args: any[]): any;
  isSimulcastSupported(...args: any[]): any;
  goLiveSimulcastEnabled(...args: any[]): any;
  getAecDump(...args: any[]): any;
  getMediaEngine(...args: any[]): any;
  getVideoComponent(...args: any[]): any;
  getCameraComponent(...args: any[]): any;
  getKrispSuppressionLevel(...args: any[]): any;
  getKrispEnableStats(...args: any[]): any;
  isEnabled(...args: any[]): any;
  isMute(...args: any[]): any;
  isDeaf(...args: any[]): any;
  hasContext(...args: any[]): any;
  isSelfMutedTemporarily(...args: any[]): any;
  isSelfMute(...args: any[]): any;
  shouldSkipMuteUnmuteSound(...args: any[]): any;
  notifyMuteUnmuteSoundWasSkipped(...args: any[]): any;
  isHardwareMute(...args: any[]): any;
  isEnableHardwareMuteNotice(...args: any[]): any;
  isSelfDeaf(...args: any[]): any;
  isVideoEnabled(...args: any[]): any;
  isVideoAvailable(...args: any[]): any;
  isScreenSharing(...args: any[]): any;
  isSoundSharing(...args: any[]): any;
  isLocalMute(...args: any[]): any;
  supportsDisableLocalVideo(...args: any[]): any;
  isLocalVideoDisabled(...args: any[]): any;
  getVideoToggleState(...args: any[]): any;
  isLocalVideoAutoDisabled(...args: any[]): any;
  isAnyLocalVideoAutoDisabled(...args: any[]): any;
  isMediaFilterSettingLoading(...args: any[]): any;
  isNativeAudioPermissionReady(...args: any[]): any;
  getGoLiveSource(...args: any[]): any;
  getGoLiveContext(...args: any[]): any;
  getLastAudioInputDeviceChangeTimestamp(...args: any[]): any;
  getLocalPan(...args: any[]): any;
  getLocalVolume(...args: any[]): any;
  getInputVolume(...args: any[]): any;
  getOutputVolume(...args: any[]): any;
  getMode(...args: any[]): any;
  getModeOptions(...args: any[]): any;
  getActiveVoiceFilter(...args: any[]): any;
  getActiveVoiceFilterAppliedAt(...args: any[]): any;
  getPreviousVoiceFilter(...args: any[]): any;
  getPreviousVoiceFilterAppliedAt(...args: any[]): any;
  getMostRecentlyRequestedVoiceFilter(...args: any[]): any;
  getVoiceFilterPlaybackEnabled(...args: any[]): any;
  getShortcuts(...args: any[]): any;
  getInputDeviceId(...args: any[]): any;
  getOutputDeviceId(...args: any[]): any;
  getVideoDeviceId(...args: any[]): any;
  getInputDevices(...args: any[]): any;
  getOutputDevices(...args: any[]): any;
  getVideoDevices(...args: any[]): any;
  getEchoCancellation(...args: any[]): any;
  getSidechainCompression(...args: any[]): any;
  getSidechainCompressionStrength(...args: any[]): any;
  getH265Enabled(...args: any[]): any;
  getLoopback(...args: any[]): any;
  getLoopbackReasons(...args: any[]): any;
  getNoiseSuppression(...args: any[]): any;
  getAutomaticGainControl(...args: any[]): any;
  getBypassSystemInputProcessing(...args: any[]): any;
  getNoiseCancellation(...args: any[]): any;
  getExperimentalEncoders(...args: any[]): any;
  getHardwareEncoding(...args: any[]): any;
  getEnableSilenceWarning(...args: any[]): any;
  getDebugLogging(...args: any[]): any;
  getQoS(...args: any[]): any;
  getAttenuation(...args: any[]): any;
  getAttenuateWhileSpeakingSelf(...args: any[]): any;
  getAttenuateWhileSpeakingOthers(...args: any[]): any;
  getAudioSubsystem(...args: any[]): any;
  getMLSSigningKey(...args: any[]): any;
  getActiveInputProfile(...args: any[]): any;
  isInputProfileCustom(...args: any[]): any;
  getSettings(...args: any[]): any;
  getState(...args: any[]): any;
  getInputDetected(...args: any[]): any;
  getNoInputDetectedNotice(...args: any[]): any;
  getPacketDelay(...args: any[]): any;
  setCanHavePriority(...args: any[]): any;
  isInteractionRequired(...args: any[]): any;
  getVideoHook(...args: any[]): any;
  supportsVideoHook(...args: any[]): any;
  getExperimentalSoundshare(...args: any[]): any;
  supportsExperimentalSoundshare(...args: any[]): any;
  supportsHookSoundshare(...args: any[]): any;
  getUseSystemScreensharePicker(...args: any[]): any;
  supportsSystemScreensharePicker(...args: any[]): any;
  getOpenH264(...args: any[]): any;
  getEverSpeakingWhileMuted(...args: any[]): any;
  getSpeakingWhileMuted(...args: any[]): any;
  getKrispModelOverride(...args: any[]): any;
  getKrispModels(...args: any[]): any;
  getKrispVadActivationThreshold(...args: any[]): any;
  hasActiveCallKitCall(...args: any[]): any;
  setHasActiveCallKitCall(...args: any[]): any;
  supportsScreenSoundshare(...args: any[]): any;
  getVideoStreamParameters(...args: any[]): any;
  fetchAsyncResources(...args: any[]): any;
  getSupportedSecureFramesProtocolVersion(...args: any[]): any;
  hasClipsSource(...args: any[]): any;
  getGpuBrand(...args: any[]): any;
}

interface MediaPlaybackStore {
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getPlaybackRate(...args: any[]): any;
  getPlaybackPosition(...args: any[]): any;
}

interface MediaPostEmbedStore {
  getMediaPostEmbed(...args: any[]): any;
  getEmbedFetchState(...args: any[]): any;
  getMediaPostEmbeds(...args: any[]): any;
}

interface MediaPostSharePromptStore {
  shouldDisplayPrompt(...args: any[]): any;
}

interface MemberSafetyStore {
  initialize(...args: any[]): any;
  isInitialized(...args: any[]): any;
  getMembersByGuildId(...args: any[]): any;
  getMembersCountByGuildId(...args: any[]): any;
  getEstimatedMemberSearchCountByGuildId(...args: any[]): any;
  getKnownMemberSearchCountByGuildId(...args: any[]): any;
  getCurrentMemberSearchResultsByGuildId(...args: any[]): any;
  getSearchStateByGuildId(...args: any[]): any;
  hasDefaultSearchStateByGuildId(...args: any[]): any;
  getPagedMembersByGuildId(...args: any[]): any;
  getPaginationStateByGuildId(...args: any[]): any;
  getElasticSearchPaginationByGuildId(...args: any[]): any;
  getEnhancedMember(...args: any[]): any;
  getNewMemberTimestamp(...args: any[]): any;
  getLastRefreshTimestamp(...args: any[]): any;
  getLastCursorTimestamp(...args: any[]): any;
}

interface MessageReactionsStore {
  getReactions(...args: any[]): any;
}

interface MessageRequestPreviewStore {
  initialize(...args: any[]): any;
  shouldLoadMessageRequestPreview(...args: any[]): any;
  getMessageRequestPreview(...args: any[]): any;
}

interface MessageRequestStore {
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  getMessageRequestChannelIds(...args: any[]): any;
  getMessageRequestsCount(...args: any[]): any;
  isMessageRequest(...args: any[]): any;
  isAcceptedOptimistic(...args: any[]): any;
  getUserCountryCode(...args: any[]): any;
  isReady(...args: any[]): any;
}

interface MessageStore {
  initialize(...args: any[]): any;
  getMessages(...args: any[]): any;
  getMessage(...args: any[]): any;
  getLastEditableMessage(...args: any[]): any;
  getLastChatCommandMessage(...args: any[]): any;
  getLastMessage(...args: any[]): any;
  getLastNonCurrentUserMessage(...args: any[]): any;
  jumpedMessageId(...args: any[]): any;
  focusedMessageId(...args: any[]): any;
  hasPresent(...args: any[]): any;
  isReady(...args: any[]): any;
  whenReady(...args: any[]): any;
  isLoadingMessages(...args: any[]): any;
  hasCurrentUserSentMessage(...args: any[]): any;
  hasCurrentUserSentMessageSinceAppStart(...args: any[]): any;
}

interface MobileWebSidebarStore {
  getIsOpen(...args: any[]): any;
}

interface MultiAccountStore {
  canUseMultiAccountNotifications: any;
  isSwitchingAccount: any;
  initialize(...args: any[]): any;
  getCanUseMultiAccountMobile(...args: any[]): any;
  getState(...args: any[]): any;
  getUsers(...args: any[]): any;
  getValidUsers(...args: any[]): any;
  getHasLoggedInAccounts(...args: any[]): any;
  getIsValidatingUsers(...args: any[]): any;
}

interface MyGuildApplicationsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getGuildIdsForApplication(...args: any[]): any;
  getLastFetchTimeMs(...args: any[]): any;
  getNextFetchRetryTimeMs(...args: any[]): any;
  getFetchState(...args: any[]): any;
}

interface NativeScreenSharePickerStore {
  initialize(...args: any[]): any;
  supported(...args: any[]): any;
  enabled(...args: any[]): any;
  releasePickerStream(...args: any[]): any;
  getPickerState(...args: any[]): any;
  getLastPickedContent(...args: any[]): any;
  getLastPickedContentTitle(...args: any[]): any;
  getLastPickedContentPID(...args: any[]): any;
  getStreamStartOptions(...args: any[]): any;
}

interface NetworkStore {
  initialize(...args: any[]): any;
  getType(...args: any[]): any;
  getEffectiveConnectionSpeed(...args: any[]): any;
  getServiceProvider(...args: any[]): any;
}

interface NewChannelsStore {
  initialize(...args: any[]): any;
  getNewChannelIds(...args: any[]): any;
  shouldIndicateNewChannel(...args: any[]): any;
}

interface NewPaymentSourceStore {
  stripePaymentMethod: any;
  popupCallbackCalled: any;
  braintreeEmail: any;
  braintreeNonce: any;
  venmoUsername: any;
  redirectedPaymentId: any;
  adyenPaymentData: any;
  redirectedPaymentSourceId: any;
  isCardInfoValid: any;
  isBillingAddressInfoValid: any;
  error: any;
  getCreditCardInfo(...args: any[]): any;
  getBillingAddressInfo(...args: any[]): any;
}

interface NewUserStore {
  initialize(...args: any[]): any;
  getType(...args: any[]): any;
  getState(...args: any[]): any;
}

interface NewlyAddedEmojiStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLastSeenEmojiByGuild(...args: any[]): any;
  isNewerThanLastSeen(...args: any[]): any;
}

interface NoteStore {
  getNote(...args: any[]): any;
}

interface NoticeStore {
  initialize(...args: any[]): any;
  hasNotice(...args: any[]): any;
  getNotice(...args: any[]): any;
  isNoticeDismissed(...args: any[]): any;
}

interface NotificationCenterItemsStore {
  loading: any;
  initialized: any;
  items: any;
  hasMore: any;
  cursor: any;
  errored: any;
  active: any;
  localItems: any;
  tabFocused: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface NotificationCenterStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getTab(...args: any[]): any;
  isLocalItemAcked(...args: any[]): any;
  hasNewMentions(...args: any[]): any;
  isDataStale(...args: any[]): any;
  isRefreshing(...args: any[]): any;
  shouldReload(...args: any[]): any;
}

interface NotificationSettingsStore {
  taskbarFlash: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getDesktopType(...args: any[]): any;
  getTTSType(...args: any[]): any;
  getDisabledSounds(...args: any[]): any;
  getDisableAllSounds(...args: any[]): any;
  getDisableUnreadBadge(...args: any[]): any;
  getNotifyMessagesInSelectedChannel(...args: any[]): any;
  isSoundDisabled(...args: any[]): any;
}

interface NotificationsInboxStore {
  oldestDisplayedMessageId: any;
  hasMoreToLoad: any;
  isLoading: any;
  hasLoadedEver: any;
  hasPreloaded: any;
  isLoadingComplete: any;
  selectedItemInfo: any;
  currentRequestAnalyticsPayload: any;
  initialize(...args: any[]): any;
  canLoadMore(...args: any[]): any;
  getInboxMessages(...args: any[]): any;
  getNotifyingChannelIds(...args: any[]): any;
  getChannelInfoMap(...args: any[]): any;
  getDevOverrides(...args: any[]): any;
}

interface NowPlayingStore {
  games: any;
  usersPlaying: any;
  gameIds: any;
  initialize(...args: any[]): any;
  getNowPlaying(...args: any[]): any;
  getUserGame(...args: any[]): any;
}

interface NowPlayingViewStore {
  currentActivityParties: any;
  nowPlayingCards: any;
  isMounted: any;
  loaded: any;
  initialize(...args: any[]): any;
}

interface OrderStore {
  isCreatingOrder: any;
  currentOrderId: any;
  handleOrderCreateStart(...args: any[]): any;
  handleOrderCreateSuccess(...args: any[]): any;
  handleOrderCreateFail(...args: any[]): any;
  handleOrderUpdateStart(...args: any[]): any;
  handleOrderUpdateSuccess(...args: any[]): any;
  handleOrderUpdateFail(...args: any[]): any;
  handlePaymentModalOpen(...args: any[]): any;
}

interface OverlayBridgeStore {
  enabled: any;
  legacyEnabled: any;
  initialize(...args: any[]): any;
  isFocusedPidInputLocked(...args: any[]): any;
  isInputLocked(...args: any[]): any;
  DEV_isInputLockedV3(...args: any[]): any;
  DEV_isInputLocked(...args: any[]): any;
  isSupported(...args: any[]): any;
  getAnyGlobalEnabledOverlay(...args: any[]): any;
  getFocusedPID(...args: any[]): any;
  isFocusedPidOutOfProcess(...args: any[]): any;
  isCurrentPidOutOfProcess(...args: any[]): any;
  isReady(...args: any[]): any;
  isCrashed(...args: any[]): any;
  getOverlayPIDStatuses(...args: any[]): any;
}

interface OverlayNotificationsStore {
  initialize(...args: any[]): any;
  getNotifications(...args: any[]): any;
}

interface OverlayRTCConnectionStore {
  getConnectionState(...args: any[]): any;
  getQuality(...args: any[]): any;
  getHostname(...args: any[]): any;
  getPings(...args: any[]): any;
  getAveragePing(...args: any[]): any;
  getLastPing(...args: any[]): any;
  getOutboundLossRate(...args: any[]): any;
}

interface OverlayRenderStore {
  initialize(...args: any[]): any;
  getDevToolsFocusedPidsWithTimestamp(...args: any[]): any;
  getHasLoadedExperiments(...args: any[]): any;
  getForcedRenderMode(...args: any[]): any;
  isAnyOverlayRendering(...args: any[]): any;
  getOverlayMethod(...args: any[]): any;
  isOverlayOOPEnabledForPid(...args: any[]): any;
  hasChangedRenderMode(...args: any[]): any;
  getTrackedGameByPid(...args: any[]): any;
  getTrackedGames(...args: any[]): any;
  getGameOverlayStatus(...args: any[]): any;
  getGlobalEnabledStatus(...args: any[]): any;
  getAnyGlobalEnabledOverlay(...args: any[]): any;
  getPerGameEnabledStatus(...args: any[]): any;
  getRenderMethod(...args: any[]): any;
  getMostRecentOverlayRenderMethod(...args: any[]): any;
  getOverlayRenderingTrackedGames(...args: any[]): any;
}

interface OverlayRunningGameStore {
  getGameForPID(...args: any[]): any;
  getGame(...args: any[]): any;
}

interface OverlaySettingsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isLimitedInteractionOverrideEnabled(...args: any[]): any;
  isNotificationDisabled(...args: any[]): any;
  getDisabledNotifications(...args: any[]): any;
}

interface OverlayStore {
  showKeybindIndicators: any;
  showInviteNotification: any;
  disableClickableRegions: any;
  customInviteMessage: any;
  initialized: any;
  incompatibleApp: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isLocked(...args: any[]): any;
  isInstanceLocked(...args: any[]): any;
  isInstanceFocused(...args: any[]): any;
  isFocused(...args: any[]): any;
  isPinned(...args: any[]): any;
  getSelectedGuildId(...args: any[]): any;
  getSelectedChannelId(...args: any[]): any;
  getSelectedCallId(...args: any[]): any;
  getDisplayUserMode(...args: any[]): any;
  getDisplayNameMode(...args: any[]): any;
  getAvatarSizeMode(...args: any[]): any;
  getNotificationPositionMode(...args: any[]): any;
  getTextChatNotificationMode(...args: any[]): any;
  getDisableExternalLinkAlert(...args: any[]): any;
  getFocusedPID(...args: any[]): any;
  getActiveRegions(...args: any[]): any;
  getTextWidgetOpacity(...args: any[]): any;
  isPreviewingInGame(...args: any[]): any;
  getTrackedGame(...args: any[]): any;
}

interface OverlayStoreV3 {
  enabled: any;
  initialize(...args: any[]): any;
  DEV_getOverlayLoggingBreadcrumbs(...args: any[]): any;
  DEV_isOverlayModuleLoggingEnabled(...args: any[]): any;
  isInputLocked(...args: any[]): any;
  isSupported(...args: any[]): any;
  isOverlayV3Enabled(...args: any[]): any;
  isOverlayV3EnabledForPID(...args: any[]): any;
  getWidgetByType(...args: any[]): any;
  isPinned(...args: any[]): any;
  hasRenderDebugMode(...args: any[]): any;
  getFocusedPID(...args: any[]): any;
  isFocused(...args: any[]): any;
  getFocusedRunningGame(...args: any[]): any;
  isReady(...args: any[]): any;
  isGPUBoosted(...args: any[]): any;
  getOverlayState(...args: any[]): any;
  getOverlayMethod(...args: any[]): any;
}

interface OverridePremiumTypeStore {
  premiumType: any;
  initialize(...args: any[]): any;
  getPremiumTypeOverride(...args: any[]): any;
  getPremiumTypeActual(...args: any[]): any;
  getCreatedAtOverride(...args: any[]): any;
  getState(...args: any[]): any;
}

interface PaymentAuthenticationStore {
  isAwaitingAuthentication: any;
  error: any;
  awaitingPaymentId: any;
}

interface PaymentSourceStore {
  paymentSources: any;
  paymentSourceIds: any;
  defaultPaymentSourceId: any;
  defaultPaymentSource: any;
  hasFetchedPaymentSources: any;
  getDefaultBillingCountryCode(...args: any[]): any;
  getPaymentSource(...args: any[]): any;
}

interface PaymentStore {
  getPayment(...args: any[]): any;
  getPayments(...args: any[]): any;
}

interface PendingReplyStore {
  getState(...args: any[]): any;
  initialize(...args: any[]): any;
  getPendingReply(...args: any[]): any;
  getPendingReplyActionSource(...args: any[]): any;
}

interface PermissionSpeakStore {
  initialize(...args: any[]): any;
  isAFKChannel(...args: any[]): any;
  shouldShowWarning(...args: any[]): any;
}

interface PermissionStore {
  initialize(...args: any[]): any;
  getChannelPermissions(...args: any[]): any;
  getGuildPermissions(...args: any[]): any;
  getGuildPermissionProps(...args: any[]): any;
  canAccessMemberSafetyPage(...args: any[]): any;
  canAccessGuildSettings(...args: any[]): any;
  canWithPartialContext(...args: any[]): any;
  can(...args: any[]): any;
  canBasicChannel(...args: any[]): any;
  computePermissions(...args: any[]): any;
  computeBasicPermissions(...args: any[]): any;
  canManageUser(...args: any[]): any;
  getHighestRole(...args: any[]): any;
  isRoleHigher(...args: any[]): any;
  canImpersonateRole(...args: any[]): any;
  getGuildVersion(...args: any[]): any;
  getChannelsVersion(...args: any[]): any;
}

interface PermissionVADStore {
  initialize(...args: any[]): any;
  shouldShowWarning(...args: any[]): any;
  canUseVoiceActivity(...args: any[]): any;
}

interface PhoneStore {
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  getCountryCode(...args: any[]): any;
}

interface PictureInPictureStore {
  pipWindow: any;
  pipVideoWindow: any;
  pipActivityWindow: any;
  pipFrameWindow: any;
  pipWindows: any;
  initialize(...args: any[]): any;
  pipWidth(...args: any[]): any;
  isEmbeddedActivityHidden(...args: any[]): any;
  isFrameHidden(...args: any[]): any;
  getDockedRect(...args: any[]): any;
  isOpen(...args: any[]): any;
  getState(...args: any[]): any;
}

interface PoggermodeAchievementStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getAllUnlockedAchievements(...args: any[]): any;
  getUnlocked(...args: any[]): any;
}

interface PoggermodeSettingsStore {
  settingsVisible: any;
  shakeIntensity: any;
  combosRequiredCount: any;
  screenshakeEnabled: any;
  screenshakeEnabledLocations: any;
  combosEnabled: any;
  comboSoundsEnabled: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  isEnabled(...args: any[]): any;
}

interface PoggermodeStore {
  initialize(...args: any[]): any;
  getComboScore(...args: any[]): any;
  getUserCombo(...args: any[]): any;
  isComboing(...args: any[]): any;
  getMessageCombo(...args: any[]): any;
  getMostRecentMessageCombo(...args: any[]): any;
  getUserComboShakeIntensity(...args: any[]): any;
}

interface PopoutWindowStore {
  initialize(...args: any[]): any;
  getWindow(...args: any[]): any;
  getWindowState(...args: any[]): any;
  getWindowKeys(...args: any[]): any;
  getWindowOpen(...args: any[]): any;
  getIsAlwaysOnTop(...args: any[]): any;
  getWindowFocused(...args: any[]): any;
  getWindowVisible(...args: any[]): any;
  getState(...args: any[]): any;
  isWindowFullyInitialized(...args: any[]): any;
  isWindowFullScreen(...args: any[]): any;
  unmountWindow(...args: any[]): any;
}

interface PremiumGiftingIntentStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getFriendAnniversaries(...args: any[]): any;
  isTopAffinityFriendAnniversary(...args: any[]): any;
  canShowFriendsTabBadge(...args: any[]): any;
  getFriendAnniversaryYears(...args: any[]): any;
  isGiftIntentMessageInCooldown(...args: any[]): any;
  getDevToolTotalFriendAnniversaries(...args: any[]): any;
}

interface PremiumPaymentModalStore {
  paymentError: any;
  getGiftCode(...args: any[]): any;
}

interface PremiumPromoStore {
  initialize(...args: any[]): any;
  isEligible(...args: any[]): any;
}

interface PresenceStore {
  initialize(...args: any[]): any;
  setCurrentUserOnConnectionOpen(...args: any[]): any;
  getStatus(...args: any[]): any;
  getActivities(...args: any[]): any;
  getHiddenActivities(...args: any[]): any;
  getPrimaryActivity(...args: any[]): any;
  getAllApplicationActivities(...args: any[]): any;
  getApplicationActivity(...args: any[]): any;
  findActivity(...args: any[]): any;
  getActivityMetadata(...args: any[]): any;
  getUserIds(...args: any[]): any;
  isMobileOnline(...args: any[]): any;
  getClientStatus(...args: any[]): any;
  getState(...args: any[]): any;
}

interface PresenceSubscriptionsStore {
  initialize(...args: any[]): any;
  isSubscribed(...args: any[]): any;
}

interface PrivateChannelReadStateStore {
  initialize(...args: any[]): any;
  getUnreadPrivateChannelIds(...args: any[]): any;
}

interface PrivateChannelRecipientsInviteStore {
  initialize(...args: any[]): any;
  getResults(...args: any[]): any;
  hasFriends(...args: any[]): any;
  getSelectedUsers(...args: any[]): any;
  getQuery(...args: any[]): any;
  getState(...args: any[]): any;
}

interface PrivateChannelSortStore {
  initialize(...args: any[]): any;
  getPrivateChannelIds(...args: any[]): any;
  getSortedChannels(...args: any[]): any;
  serializeForOverlay(...args: any[]): any;
}

interface ProfileEffectStore {
  isFetchingAll: any;
  fetchError: any;
  profileEffects: any;
  tryItOutId: any;
  canFetch(...args: any[]): any;
  getProfileEffectById(...args: any[]): any;
}

interface PromotionsStore {
  outboundPromotions: any;
  lastSeenOutboundPromotionStartDate: any;
  lastDismissedOutboundPromotionStartDate: any;
  lastFetchedActivePromotions: any;
  isFetchingActiveOutboundPromotions: any;
  hasFetchedConsumedInboundPromotionId: any;
  consumedInboundPromotionId: any;
  bogoPromotion: any;
  isFetchingActiveBogoPromotion: any;
  lastFetchedActiveBogoPromotion: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ProxyBlockStore {
  blockedByProxy: any;
}

interface PurchaseTokenAuthStore {
  purchaseTokenAuthState: any;
  purchaseTokenHash: any;
  expiresAt: any;
}

interface PurchasedItemsFestivityStore {
  canPlayWowMoment: any;
  isFetchingWowMomentMedia: any;
  wowMomentWumpusMedia: any;
  getState(...args: any[]): any;
}

interface QuestsStore {
  quests: any;
  excludedQuests: any;
  claimedQuests: any;
  isFetchingCurrentQuests: any;
  isFetchingClaimedQuests: any;
  lastFetchedCurrentQuests: any;
  lastFetchedQuestToDeliver: any;
  isFetchingQuestToDeliver: any;
  questDeliveryOverride: any;
  questToDeliverForPlacement: any;
  questEnrollmentBlockedUntil: any;
  isEnrolling(...args: any[]): any;
  isClaimingReward(...args: any[]): any;
  isFetchingRewardCode(...args: any[]): any;
  isDismissingContent(...args: any[]): any;
  getRewardCode(...args: any[]): any;
  getRewards(...args: any[]): any;
  getStreamHeartbeatFailure(...args: any[]): any;
  getQuest(...args: any[]): any;
  isProgressingOnDesktop(...args: any[]): any;
  selectedTaskPlatform(...args: any[]): any;
  getOptimisticProgress(...args: any[]): any;
  getExpiredQuestsMap(...args: any[]): any;
  isQuestExpired(...args: any[]): any;
}

interface QuickSwitcherStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isOpen(...args: any[]): any;
  getResultTotals(...args: any[]): any;
  channelNoticePredicate(...args: any[]): any;
  getFrequentGuilds(...args: any[]): any;
  getFrequentGuildsLength(...args: any[]): any;
  getChannelHistory(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface RTCConnectionDesyncStore {
  desyncedVoiceStatesCount: any;
  initialize(...args: any[]): any;
  getDesyncedUserIds(...args: any[]): any;
  getDesyncedVoiceStates(...args: any[]): any;
  getDesyncedParticipants(...args: any[]): any;
}

interface RTCConnectionStore {
  initialize(...args: any[]): any;
  getRTCConnection(...args: any[]): any;
  getState(...args: any[]): any;
  isConnected(...args: any[]): any;
  isDisconnected(...args: any[]): any;
  getRemoteDisconnectVoiceChannelId(...args: any[]): any;
  getLastSessionVoiceChannelId(...args: any[]): any;
  setLastSessionVoiceChannelId(...args: any[]): any;
  getGuildId(...args: any[]): any;
  getChannelId(...args: any[]): any;
  getHostname(...args: any[]): any;
  getQuality(...args: any[]): any;
  getPings(...args: any[]): any;
  getAveragePing(...args: any[]): any;
  getLastPing(...args: any[]): any;
  getOutboundLossRate(...args: any[]): any;
  getMediaSessionId(...args: any[]): any;
  getRTCConnectionId(...args: any[]): any;
  getDuration(...args: any[]): any;
  getVoiceFilterSpeakingDurationMs(...args: any[]): any;
  getPacketStats(...args: any[]): any;
  getVoiceStateStats(...args: any[]): any;
  getWasEverMultiParticipant(...args: any[]): any;
  getWasEverRtcConnected(...args: any[]): any;
  getUserIds(...args: any[]): any;
  isUserConnected(...args: any[]): any;
  getSecureFramesState(...args: any[]): any;
  getSecureFramesRosterMapEntry(...args: any[]): any;
  getLastNonZeroRemoteVideoSinkWantsTime(...args: any[]): any;
  getWasMoved(...args: any[]): any;
}

interface RTCDebugStore {
  getSection(...args: any[]): any;
  getInboundStats(...args: any[]): any;
  getOutboundStats(...args: any[]): any;
  getAllStats(...args: any[]): any;
  getVideoStreams(...args: any[]): any;
  shouldRecordNextConnection(...args: any[]): any;
  getSimulcastDebugOverride(...args: any[]): any;
}

interface RTCRegionStore {
  initialize(...args: any[]): any;
  shouldIncludePreferredRegion(...args: any[]): any;
  getPreferredRegion(...args: any[]): any;
  getPreferredRegions(...args: any[]): any;
  getRegion(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  shouldPerformLatencyTest(...args: any[]): any;
}

interface ReadStateStore {
  initialize(...args: any[]): any;
  getReadStatesByChannel(...args: any[]): any;
  getForDebugging(...args: any[]): any;
  getNotifCenterReadState(...args: any[]): any;
  hasUnread(...args: any[]): any;
  hasUnreadOrMentions(...args: any[]): any;
  hasTrackedUnread(...args: any[]): any;
  isForumPostUnread(...args: any[]): any;
  getUnreadCount(...args: any[]): any;
  getMentionCount(...args: any[]): any;
  getIsMentionLowImportance(...args: any[]): any;
  getGuildChannelUnreadState(...args: any[]): any;
  hasRecentlyVisitedAndRead(...args: any[]): any;
  ackMessageId(...args: any[]): any;
  getTrackedAckMessageId(...args: any[]): any;
  lastMessageId(...args: any[]): any;
  lastMessageTimestamp(...args: any[]): any;
  lastPinTimestamp(...args: any[]): any;
  getOldestUnreadMessageId(...args: any[]): any;
  getOldestUnreadTimestamp(...args: any[]): any;
  isEstimated(...args: any[]): any;
  hasOpenedThread(...args: any[]): any;
  hasUnreadPins(...args: any[]): any;
  isNewForumThread(...args: any[]): any;
  getAllReadStates(...args: any[]): any;
  getGuildUnreadsSentinel(...args: any[]): any;
  getMentionChannelIds(...args: any[]): any;
  getNonChannelAckId(...args: any[]): any;
  getSnapshot(...args: any[]): any;
  getChannelIdsForWindowId(...args: any[]): any;
}

interface RecentMentionsStore {
  hasLoadedEver: any;
  lastLoaded: any;
  loading: any;
  hasMore: any;
  guildFilter: any;
  everyoneFilter: any;
  roleFilter: any;
  mentionsAreStale: any;
  mentionCountByChannel: any;
  initialize(...args: any[]): any;
  getMentions(...args: any[]): any;
  getSettingsFilteredMentions(...args: any[]): any;
  hasMention(...args: any[]): any;
  getMentionCountForChannel(...args: any[]): any;
}

interface RecentUserActivityStore {
  currentUserApplicationIds: any;
}

interface RecentVoiceChannelStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getChannelHistory(...args: any[]): any;
}

interface RecentlyActiveCollapseStore {
  initialize(...args: any[]): any;
  isCollapsed(...args: any[]): any;
  getState(...args: any[]): any;
}

interface ReferencedMessageStore {
  initialize(...args: any[]): any;
  getMessageByReference(...args: any[]): any;
  getMessage(...args: any[]): any;
  getReplyIdsForChannel(...args: any[]): any;
}

interface ReferralTrialStore {
  initialize(...args: any[]): any;
  checkAndFetchReferralsRemaining(...args: any[]): any;
  getReferralsRemaining(...args: any[]): any;
  getSentUserIds(...args: any[]): any;
  isFetchingReferralsRemaining(...args: any[]): any;
  getRelevantUserTrialOffer(...args: any[]): any;
  isResolving(...args: any[]): any;
  getEligibleUsers(...args: any[]): any;
  getFetchingEligibleUsers(...args: any[]): any;
  getNextIndexOfEligibleUsers(...args: any[]): any;
  getIsEligibleToSendReferrals(...args: any[]): any;
  getRefreshAt(...args: any[]): any;
  getAllRelevantReferralTrialOffers(...args: any[]): any;
  getRecipientStatus(...args: any[]): any;
}

interface RegionStore {
  initialize(...args: any[]): any;
  getOptimalRegion(...args: any[]): any;
  getOptimalRegionId(...args: any[]): any;
  getRandomRegion(...args: any[]): any;
  getRandomRegionId(...args: any[]): any;
  getRegions(...args: any[]): any;
}

interface RelationshipStore {
  initialize(...args: any[]): any;
  isFriend(...args: any[]): any;
  isBlockedOrIgnored(...args: any[]): any;
  isBlockedOrIgnoredForMessage(...args: any[]): any;
  isBlocked(...args: any[]): any;
  isBlockedForMessage(...args: any[]): any;
  isIgnored(...args: any[]): any;
  isIgnoredForMessage(...args: any[]): any;
  isUnfilteredPendingIncoming(...args: any[]): any;
  getPendingCount(...args: any[]): any;
  getSpamCount(...args: any[]): any;
  getPendingIgnoredCount(...args: any[]): any;
  getOutgoingCount(...args: any[]): any;
  getFriendCount(...args: any[]): any;
  getRelationshipCount(...args: any[]): any;
  getMutableRelationships(...args: any[]): any;
  getVersion(...args: any[]): any;
  isSpam(...args: any[]): any;
  getRelationshipType(...args: any[]): any;
  getNickname(...args: any[]): any;
  getSince(...args: any[]): any;
  getSinces(...args: any[]): any;
  getFriendIDs(...args: any[]): any;
  getBlockedIDs(...args: any[]): any;
  getIgnoredIDs(...args: any[]): any;
  getBlockedOrIgnoredIDs(...args: any[]): any;
  getOriginApplicationId(...args: any[]): any;
  isStranger(...args: any[]): any;
}

interface ReportToModStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isUserBanned(...args: any[]): any;
  getReportedMessages(...args: any[]): any;
  hasReportedMessage(...args: any[]): any;
}

interface RobloxSubgameStore {
  initialize(...args: any[]): any;
  getCurrentSubgameInfo(...args: any[]): any;
  getState(...args: any[]): any;
}

interface RpcNotificationSettingsStore {
  areSlayerNotificationsSuppressed(...args: any[]): any;
}

interface RunningGameStore {
  canShowAdminWarning: any;
  initialize(...args: any[]): any;
  getVisibleGame(...args: any[]): any;
  getCurrentGameForAnalytics(...args: any[]): any;
  getVisibleRunningGames(...args: any[]): any;
  getRunningGames(...args: any[]): any;
  getRunningDiscordApplicationIds(...args: any[]): any;
  getRunningVerifiedApplicationIds(...args: any[]): any;
  getGameForPID(...args: any[]): any;
  getLauncherForPID(...args: any[]): any;
  getOverlayOptionsForPID(...args: any[]): any;
  shouldElevateProcessForPID(...args: any[]): any;
  shouldContinueWithoutElevatedProcessForPID(...args: any[]): any;
  getCandidateGames(...args: any[]): any;
  getGamesSeen(...args: any[]): any;
  getSeenGameByName(...args: any[]): any;
  isObservedAppRunning(...args: any[]): any;
  getOverrides(...args: any[]): any;
  getOverrideForGame(...args: any[]): any;
  getOverlayEnabledForGame(...args: any[]): any;
  getGameOverlayStatus(...args: any[]): any;
  getObservedAppNameForWindow(...args: any[]): any;
  isDetectionEnabled(...args: any[]): any;
  addExecutableTrackedByAnalytics(...args: any[]): any;
}

interface SKUPaymentModalStore {
  isPurchasingSKU: any;
  forceConfirmationStepOnMount: any;
  error: any;
  skuId: any;
  applicationId: any;
  analyticsLocation: any;
  promotionId: any;
  isIAP: any;
  giftCode: any;
  isGift: any;
  getPricesForSku(...args: any[]): any;
  isOpen(...args: any[]): any;
  isFetchingSKU(...args: any[]): any;
}

interface SKUStore {
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  getForApplication(...args: any[]): any;
  isFetching(...args: any[]): any;
  getSKUs(...args: any[]): any;
  getParentSKU(...args: any[]): any;
  didFetchingSkuFail(...args: any[]): any;
}

interface SafetyHubStore {
  isFetching(...args: any[]): any;
  getClassifications(...args: any[]): any;
  getClassification(...args: any[]): any;
  getAccountStanding(...args: any[]): any;
  getFetchError(...args: any[]): any;
  isInitialized(...args: any[]): any;
  getClassificationRequestState(...args: any[]): any;
  getAppealClassificationId(...args: any[]): any;
  getIsDsaEligible(...args: any[]): any;
  getIsAppealEligible(...args: any[]): any;
  getAppealEligibility(...args: any[]): any;
  getAppealSignal(...args: any[]): any;
  getFreeTextAppealReason(...args: any[]): any;
  getIsSubmitting(...args: any[]): any;
  getSubmitError(...args: any[]): any;
  getUsername(...args: any[]): any;
  getAgeVerificationWebviewUrl(...args: any[]): any;
  getAgeVerificationError(...args: any[]): any;
  getIsLoadingAgeVerification(...args: any[]): any;
  getAgeCheckStatus(...args: any[]): any;
  getAgeCheckError(...args: any[]): any;
  getAgeCheckAttempts(...args: any[]): any;
}

interface SaveableChannelsStore {
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  canEvictOrphans(...args: any[]): any;
  saveLimit(...args: any[]): any;
  getSaveableChannels(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
}

interface SavedMessagesStore {
  initialize(...args: any[]): any;
  getSavedMessages(...args: any[]): any;
  getSavedMessage(...args: any[]): any;
  getMessageBookmarks(...args: any[]): any;
  getMessageReminders(...args: any[]): any;
  getOverdueMessageReminderCount(...args: any[]): any;
  hasOverdueReminder(...args: any[]): any;
  getSavedMessageCount(...args: any[]): any;
  getIsStale(...args: any[]): any;
  getLastChanged(...args: any[]): any;
  isMessageBookmarked(...args: any[]): any;
  isMessageReminder(...args: any[]): any;
}

interface SearchAutocompleteStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSelectedSearchContext(...args: any[]): any;
  getFilterResults(...args: any[]): any;
}

interface SearchMessageStore {
  getMessage(...args: any[]): any;
}

interface SearchStore {
  initialize(...args: any[]): any;
  getCurrentSearchId(...args: any[]): any;
  getEditorState(...args: any[]): any;
  shouldShowBlockedResults(...args: any[]): any;
  shouldShowNoResultsAlt(...args: any[]): any;
  getSearchResultsQueryString(...args: any[]): any;
  getSearchResultsQuery(...args: any[]): any;
  getSearchResultsOffset(...args: any[]): any;
  hasSearchState(...args: any[]): any;
}

interface SecureFramesPersistedStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getPersistentCodesEnabled(...args: any[]): any;
  getUploadedKeyVersionsCached(...args: any[]): any;
}

interface SecureFramesVerifiedStore {
  initialize(...args: any[]): any;
  isCallVerified(...args: any[]): any;
  isStreamVerified(...args: any[]): any;
  isUserVerified(...args: any[]): any;
}

interface SelectedChannelStore {
  initialize(...args: any[]): any;
  getChannelId(...args: any[]): any;
  getVoiceChannelId(...args: any[]): any;
  getMostRecentSelectedTextChannelId(...args: any[]): any;
  getCurrentlySelectedChannelId(...args: any[]): any;
  getLastSelectedChannelId(...args: any[]): any;
  getLastSelectedChannels(...args: any[]): any;
  getLastChannelFollowingDestination(...args: any[]): any;
}

interface SelectedGuildStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getGuildId(...args: any[]): any;
  getLastSelectedGuildId(...args: any[]): any;
  getLastSelectedTimestamp(...args: any[]): any;
}

interface SelectivelySyncedUserSettingsStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  shouldSync(...args: any[]): any;
  getTextSettings(...args: any[]): any;
  getAppearanceSettings(...args: any[]): any;
}

interface SelfPresenceStore {
  initialize(...args: any[]): any;
  getLocalPresence(...args: any[]): any;
  getStatus(...args: any[]): any;
  getActivities(...args: any[]): any;
  getHiddenActivities(...args: any[]): any;
  getPrimaryActivity(...args: any[]): any;
  getApplicationActivity(...args: any[]): any;
  findActivity(...args: any[]): any;
}

interface SendMessageOptionsStore {
  getOptions(...args: any[]): any;
}

interface SessionsStore {
  initialize(...args: any[]): any;
  getSessions(...args: any[]): any;
  getSession(...args: any[]): any;
  getRemoteActivities(...args: any[]): any;
  getHiddenActivities(...args: any[]): any;
  getSessionById(...args: any[]): any;
  getActiveSession(...args: any[]): any;
}

interface SharedCanvasStore {
  visibleOverlayCanvas: any;
  getDrawables(...args: any[]): any;
  getAvatarImage(...args: any[]): any;
  getEmojiImage(...args: any[]): any;
  getDrawMode(...args: any[]): any;
}

interface SlowmodeStore {
  initialize(...args: any[]): any;
  getSlowmodeCooldownGuess(...args: any[]): any;
  isChannelOnCooldown(...args: any[]): any;
}

interface SortedGuildStore {
  initialize(...args: any[]): any;
  getGuildsTree(...args: any[]): any;
  getGuildFolders(...args: any[]): any;
  getGuildFolderById(...args: any[]): any;
  getFlattenedGuildIds(...args: any[]): any;
  getFlattenedGuildFolderList(...args: any[]): any;
  getCompatibleGuildFolders(...args: any[]): any;
  getFastListGuildFolders(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
}

interface SortedVoiceStateStore {
  initialize(...args: any[]): any;
  getVoiceStates(...args: any[]): any;
  getAllVoiceStates(...args: any[]): any;
  getVoiceStatesForChannel(...args: any[]): any;
  getVoiceStatesForChannelAlt(...args: any[]): any;
  countVoiceStatesForChannel(...args: any[]): any;
  getVoiceStateVersion(...args: any[]): any;
}

interface SoundboardEventStore {
  playedSoundHistory: any;
  recentlyHeardSoundIds: any;
  frecentlyPlayedSounds: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
}

interface SoundboardOverlayStore {
  keepOpen: any;
  enabled: any;
}

interface SoundboardStore {
  initialize(...args: any[]): any;
  getOverlaySerializedState(...args: any[]): any;
  getSounds(...args: any[]): any;
  getSoundsForGuild(...args: any[]): any;
  getSound(...args: any[]): any;
  getSoundById(...args: any[]): any;
  isFetchingSounds(...args: any[]): any;
  isFetchingDefaultSounds(...args: any[]): any;
  isFetching(...args: any[]): any;
  shouldFetchDefaultSounds(...args: any[]): any;
  hasFetchedDefaultSounds(...args: any[]): any;
  isUserPlayingSounds(...args: any[]): any;
  isPlayingSound(...args: any[]): any;
  isFavoriteSound(...args: any[]): any;
  getFavorites(...args: any[]): any;
  isLocalSoundboardMuted(...args: any[]): any;
  hasHadOtherUserPlaySoundInSession(...args: any[]): any;
  hasFetchedAllSounds(...args: any[]): any;
}

interface SoundpackStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSoundpack(...args: any[]): any;
  getLastSoundpackExperimentId(...args: any[]): any;
}

interface SpamMessageRequestStore {
  initialize(...args: any[]): any;
  loadCache(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  getSpamChannelIds(...args: any[]): any;
  getSpamChannelsCount(...args: any[]): any;
  isSpam(...args: any[]): any;
  isAcceptedOptimistic(...args: any[]): any;
  isReady(...args: any[]): any;
}

interface SpeakingStore {
  initialize(...args: any[]): any;
  getSpeakingDuration(...args: any[]): any;
  getSpeakers(...args: any[]): any;
  isSpeaking(...args: any[]): any;
  isPrioritySpeaker(...args: any[]): any;
  isSoundSharing(...args: any[]): any;
  isAnyoneElseSpeaking(...args: any[]): any;
  isCurrentUserSpeaking(...args: any[]): any;
  isAnyonePrioritySpeaking(...args: any[]): any;
  isCurrentUserPrioritySpeaker(...args: any[]): any;
  isCurrentUserPrioritySpeaking(...args: any[]): any;
}

interface SpellcheckStore {
  initialize(...args: any[]): any;
  isEnabled(...args: any[]): any;
  hasLearnedWord(...args: any[]): any;
}

interface SpotifyProtocolStore {
  isProtocolRegistered(...args: any[]): any;
}

interface SpotifyStore {
  initialize(...args: any[]): any;
  hasConnectedAccount(...args: any[]): any;
  getActiveSocketAndDevice(...args: any[]): any;
  getPlayableComputerDevices(...args: any[]): any;
  canPlay(...args: any[]): any;
  getSyncingWith(...args: any[]): any;
  wasAutoPaused(...args: any[]): any;
  getLastPlayedTrackId(...args: any[]): any;
  getTrack(...args: any[]): any;
  getPlayerState(...args: any[]): any;
  shouldShowActivity(...args: any[]): any;
  getActivity(...args: any[]): any;
}

interface StageChannelParticipantStore {
  initialize(...args: any[]): any;
  getParticipantsVersion(...args: any[]): any;
  getMutableParticipants(...args: any[]): any;
  getMutableRequestToSpeakParticipants(...args: any[]): any;
  getRequestToSpeakParticipantsVersion(...args: any[]): any;
  getParticipantCount(...args: any[]): any;
  getChannels(...args: any[]): any;
  getChannelsVersion(...args: any[]): any;
  getParticipant(...args: any[]): any;
}

interface StageChannelRoleStore {
  initialize(...args: any[]): any;
  isSpeaker(...args: any[]): any;
  isModerator(...args: any[]): any;
  isAudienceMember(...args: any[]): any;
  getPermissionsForUser(...args: any[]): any;
}

interface StageChannelSelfRichPresenceStore {
  initialize(...args: any[]): any;
  getActivity(...args: any[]): any;
}

interface StageInstanceStore {
  getStageInstanceByChannel(...args: any[]): any;
  isLive(...args: any[]): any;
  isPublic(...args: any[]): any;
  getStageInstancesByGuild(...args: any[]): any;
  getAllStageInstances(...args: any[]): any;
}

interface StageMusicStore {
  initialize(...args: any[]): any;
  isMuted(...args: any[]): any;
  shouldPlay(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface StickerMessagePreviewStore {
  getStickerPreview(...args: any[]): any;
}

interface StickersPersistedStore {
  stickerFrecencyWithoutFetchingLatest: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasPendingUsage(...args: any[]): any;
}

interface StickersStore {
  isLoaded: any;
  loadState: any;
  stickerMetadata: any;
  hasLoadedStickerPacks: any;
  isFetchingStickerPacks: any;
  initialize(...args: any[]): any;
  getStickerById(...args: any[]): any;
  getStickerPack(...args: any[]): any;
  getPremiumPacks(...args: any[]): any;
  isPremiumPack(...args: any[]): any;
  getRawStickersByGuild(...args: any[]): any;
  getAllStickersIterator(...args: any[]): any;
  getAllGuildStickers(...args: any[]): any;
  getStickersByGuildId(...args: any[]): any;
}

interface StoreListingStore {
  initialize(...args: any[]): any;
  get(...args: any[]): any;
  getForSKU(...args: any[]): any;
  getUnpublishedForSKU(...args: any[]): any;
  getForChannel(...args: any[]): any;
  isFetchingForSKU(...args: any[]): any;
  getStoreListing(...args: any[]): any;
}

interface StreamRTCConnectionStore {
  getRTCConnections(...args: any[]): any;
  getAllActiveStreamKeys(...args: any[]): any;
  getRTCConnection(...args: any[]): any;
  getQuality(...args: any[]): any;
  getMediaSessionId(...args: any[]): any;
  getRtcConnectionId(...args: any[]): any;
  getVideoStats(...args: any[]): any;
  getHostname(...args: any[]): any;
  getRegion(...args: any[]): any;
  getMaxViewers(...args: any[]): any;
  getStreamSourceId(...args: any[]): any;
  getLastNonZeroRemoteVideoSinkWantsTime(...args: any[]): any;
  getUserIds(...args: any[]): any;
  isUserConnected(...args: any[]): any;
  getSecureFramesState(...args: any[]): any;
  getSecureFramesRosterMapEntry(...args: any[]): any;
}

interface StreamerModeStore {
  enabled: any;
  autoToggle: any;
  hideInstantInvites: any;
  hidePersonalInformation: any;
  disableSounds: any;
  disableNotifications: any;
  enableContentProtection: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getSettings(...args: any[]): any;
}

interface StreamingCapabilitiesStore {
  GPUDriversOutdated: any;
  canUseHardwareAcceleration: any;
  problematicGPUDriver: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface SubscriptionPlanStore {
  getPlanIdsForSkus(...args: any[]): any;
  getFetchedSKUIDs(...args: any[]): any;
  getForSKU(...args: any[]): any;
  getForSkuAndInterval(...args: any[]): any;
  get(...args: any[]): any;
  isFetchingForSKU(...args: any[]): any;
  isFetchingForSKUs(...args: any[]): any;
  isLoadedForSKU(...args: any[]): any;
  isLoadedForSKUs(...args: any[]): any;
  isFetchingForPremiumSKUs(...args: any[]): any;
  isLoadedForPremiumSKUs(...args: any[]): any;
  ignoreSKUFetch(...args: any[]): any;
  getPaymentSourcesForPlanId(...args: any[]): any;
  getPaymentSourceIds(...args: any[]): any;
  hasPaymentSourceForSKUId(...args: any[]): any;
  hasPaymentSourceForSKUIds(...args: any[]): any;
}

interface SubscriptionRemindersStore {
  shouldShowReactivateNotice(...args: any[]): any;
}

interface SubscriptionRoleStore {
  initialize(...args: any[]): any;
  getGuildIdsWithPurchasableRoles(...args: any[]): any;
  buildRoles(...args: any[]): any;
  getSubscriptionRoles(...args: any[]): any;
  getPurchasableSubscriptionRoles(...args: any[]): any;
  getUserSubscriptionRoles(...args: any[]): any;
  getUserIsAdmin(...args: any[]): any;
}

interface SubscriptionStore {
  hasFetchedSubscriptions(...args: any[]): any;
  hasFetchedMostRecentPremiumTypeSubscription(...args: any[]): any;
  hasFetchedPreviousPremiumTypeSubscription(...args: any[]): any;
  getPremiumSubscription(...args: any[]): any;
  getPremiumTypeSubscription(...args: any[]): any;
  inReverseTrial(...args: any[]): any;
  getSubscriptions(...args: any[]): any;
  getSubscriptionById(...args: any[]): any;
  getActiveGuildSubscriptions(...args: any[]): any;
  getActiveApplicationSubscriptions(...args: any[]): any;
  getSubscriptionForPlanIds(...args: any[]): any;
  getMostRecentPremiumTypeSubscription(...args: any[]): any;
  getPreviousPremiumTypeSubscription(...args: any[]): any;
  getIsSubscriptionEligibleForReward(...args: any[]): any;
  getIsFetchingSubscriptionRewardEligibility(...args: any[]): any;
  getIsFetchingMostRecentSubscription(...args: any[]): any;
  getLastLazyPerkSync(...args: any[]): any;
}

interface SummaryStore {
  getState(...args: any[]): any;
  initialize(...args: any[]): any;
  allSummaries(...args: any[]): any;
  topSummaries(...args: any[]): any;
  summaries(...args: any[]): any;
  shouldShowTopicsBar(...args: any[]): any;
  findSummary(...args: any[]): any;
  selectedSummary(...args: any[]): any;
  summaryFeedback(...args: any[]): any;
  isFetching(...args: any[]): any;
  status(...args: any[]): any;
  shouldFetch(...args: any[]): any;
  channelAffinities(...args: any[]): any;
  channelAffinitiesById(...args: any[]): any;
  channelAffinitiesStatus(...args: any[]): any;
  shouldFetchChannelAffinities(...args: any[]): any;
  defaultChannelIds(...args: any[]): any;
  visibleSummaryIndex(...args: any[]): any;
}

interface SurveyStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getCurrentSurvey(...args: any[]): any;
  getSurveyOverride(...args: any[]): any;
  getLastSeenTimestamp(...args: any[]): any;
}

interface TTSStore {
  currentMessage: any;
  speechRate: any;
  initialize(...args: any[]): any;
  isSpeakingMessage(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
}

interface TestModeStore {
  isTestMode: any;
  isFetchingAuthorization: any;
  testModeEmbeddedApplicationId: any;
  testModeApplicationId: any;
  testModeOriginURL: any;
  error: any;
  initialize(...args: any[]): any;
  inTestModeForApplication(...args: any[]): any;
  inTestModeForEmbeddedApplication(...args: any[]): any;
  shouldDisplayTestMode(...args: any[]): any;
  getState(...args: any[]): any;
  whenInitialized(...args: any[]): any;
}

interface ThemeStore {
  theme: any;
  systemTheme: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  themePreferenceForSystemTheme(...args: any[]): any;
}

interface ThreadMemberListStore {
  initialize(...args: any[]): any;
  getMemberListVersion(...args: any[]): any;
  getMemberListSections(...args: any[]): any;
  canUserViewChannel(...args: any[]): any;
}

interface ThreadMembersStore {
  initialize(...args: any[]): any;
  getMemberCount(...args: any[]): any;
  getMemberIdsPreview(...args: any[]): any;
  getInitialOverlayState(...args: any[]): any;
}

interface ThreadMessageStore {
  initialize(...args: any[]): any;
  getCount(...args: any[]): any;
  getMostRecentMessage(...args: any[]): any;
  getChannelThreadsVersion(...args: any[]): any;
  getInitialOverlayState(...args: any[]): any;
}

interface TopEmojiStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getTopEmojiIdsByGuildId(...args: any[]): any;
  getIsFetching(...args: any[]): any;
}

interface TransientKeyStore {
  getUsers(...args: any[]): any;
  isKeyVerified(...args: any[]): any;
}

interface TutorialIndicatorStore {
  initialize(...args: any[]): any;
  shouldShow(...args: any[]): any;
  shouldShowAnyIndicators(...args: any[]): any;
  getIndicators(...args: any[]): any;
  getData(...args: any[]): any;
  getDefinition(...args: any[]): any;
}

interface TypingStore {
  getTypingUsers(...args: any[]): any;
  isTyping(...args: any[]): any;
}

interface UnreadSettingNoticeStore2 {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLastActionTime(...args: any[]): any;
  maybeAutoUpgradeChannel(...args: any[]): any;
}

interface UnsyncedUserSettingsStore {
  displayCompactAvatars: any;
  lowQualityImageMode: any;
  videoUploadQuality: any;
  dataSavingMode: any;
  expressionPickerWidth: any;
  messageRequestSidebarWidth: any;
  threadSidebarWidth: any;
  postSidebarWidth: any;
  callChatSidebarWidth: any;
  homeSidebarWidth: any;
  callParticipantsSidebarWidth: any;
  callHeaderHeight: any;
  useSystemTheme: any;
  activityPanelHeight: any;
  disableVoiceChannelChangeAlert: any;
  disableEmbeddedActivityPopOutAlert: any;
  disableActivityHardwareAccelerationPrompt: any;
  disableInviteWithTextChannelActivityLaunch: any;
  disableHideSelfStreamAndVideoConfirmationAlert: any;
  pushUpsellUserSettingsDismissed: any;
  disableActivityHostLeftNitroUpsell: any;
  disableCallUserConfirmationPrompt: any;
  disableApplicationSubscriptionCancellationSurvey: any;
  darkSidebar: any;
  useMobileChatCustomRenderer: any;
  saveCameraUploadsToDevice: any;
  showPlayAgain: any;
  listDensity: any;
  initialize(...args: any[]): any;
  getUserAgnosticState(...args: any[]): any;
  isVisualRefreshDisabled(...args: any[]): any;
}

interface UpcomingEventNoticesStore {
  initialize(...args: any[]): any;
  getGuildEventNoticeDismissalTime(...args: any[]): any;
  getAllEventDismissals(...args: any[]): any;
  getUpcomingNoticeSeenTime(...args: any[]): any;
  getAllUpcomingNoticeSeenTimes(...args: any[]): any;
  getState(...args: any[]): any;
}

interface UploadAttachmentStore {
  getFirstUpload(...args: any[]): any;
  hasAdditionalUploads(...args: any[]): any;
  getUploads(...args: any[]): any;
  getUploadCount(...args: any[]): any;
  getUpload(...args: any[]): any;
  findUpload(...args: any[]): any;
}

interface UploadStore {
  initialize(...args: any[]): any;
  getFiles(...args: any[]): any;
  getMessageForFile(...args: any[]): any;
  getUploaderFileForMessageId(...args: any[]): any;
  getUploadAttachments(...args: any[]): any;
}

interface UserAffinitiesV2Store {
  initialize(...args: any[]): any;
  shouldFetch(...args: any[]): any;
  isFetching(...args: any[]): any;
  getUserAffinities(...args: any[]): any;
  getUserAffinitiesMap(...args: any[]): any;
  compare(...args: any[]): any;
  getUserAffinity(...args: any[]): any;
  getState(...args: any[]): any;
  isHighlyAffinedVCUser(...args: any[]): any;
}

interface UserGuildJoinRequestStore {
  hasFetchedRequestToJoinGuilds: any;
  getRequest(...args: any[]): any;
  computeGuildIds(...args: any[]): any;
  getJoinRequestGuild(...args: any[]): any;
  hasJoinRequestCoackmark(...args: any[]): any;
  getCooldown(...args: any[]): any;
}

interface UserGuildSettingsStore {
  mentionOnAllMessages: any;
  accountNotificationSettings: any;
  useNewNotifications: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  isSuppressEveryoneEnabled(...args: any[]): any;
  isSuppressRolesEnabled(...args: any[]): any;
  isMuteScheduledEventsEnabled(...args: any[]): any;
  isMobilePushEnabled(...args: any[]): any;
  isMuted(...args: any[]): any;
  isTemporarilyMuted(...args: any[]): any;
  getMuteConfig(...args: any[]): any;
  getMessageNotifications(...args: any[]): any;
  getChannelOverrides(...args: any[]): any;
  getNotifyHighlights(...args: any[]): any;
  getGuildFlags(...args: any[]): any;
  getChannelMessageNotifications(...args: any[]): any;
  getChannelMuteConfig(...args: any[]): any;
  getMutedChannels(...args: any[]): any;
  isChannelMuted(...args: any[]): any;
  isCategoryMuted(...args: any[]): any;
  resolvedMessageNotifications(...args: any[]): any;
  resolveUnreadSetting(...args: any[]): any;
  isGuildOrCategoryOrChannelMuted(...args: any[]): any;
  allowNoMessages(...args: any[]): any;
  allowAllMessages(...args: any[]): any;
  isGuildCollapsed(...args: any[]): any;
  getAllSettings(...args: any[]): any;
  getChannelIdFlags(...args: any[]): any;
  getChannelFlags(...args: any[]): any;
  getNewForumThreadsCreated(...args: any[]): any;
  isOptInEnabled(...args: any[]): any;
  isChannelRecordOrParentOptedIn(...args: any[]): any;
  isChannelOrParentOptedIn(...args: any[]): any;
  isChannelOptedIn(...args: any[]): any;
  getOptedInChannels(...args: any[]): any;
  getOptedInChannelsWithPendingUpdates(...args: any[]): any;
  getPendingChannelUpdates(...args: any[]): any;
  getGuildFavorites(...args: any[]): any;
  isFavorite(...args: any[]): any;
  isMessagesFavorite(...args: any[]): any;
  isAddedToMessages(...args: any[]): any;
  getAddedToMessages(...args: any[]): any;
  getGuildUnreadSetting(...args: any[]): any;
  resolveGuildUnreadSetting(...args: any[]): any;
  getChannelRecordUnreadSetting(...args: any[]): any;
  getChannelUnreadSetting(...args: any[]): any;
}

interface UserLeaderboardStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLastUpdateRequested(...args: any[]): any;
}

interface UserOfferStore {
  initialize(...args: any[]): any;
  getUserTrialOffer(...args: any[]): any;
  getUserDiscountOffer(...args: any[]): any;
  getAnyOfUserTrialOfferId(...args: any[]): any;
  isFetchingOffer(...args: any[]): any;
  hasFetchedOffer(...args: any[]): any;
  shouldFetchReferralOffer(...args: any[]): any;
  getAlmostExpiringTrialOffers(...args: any[]): any;
  getAlmostExpiringDiscountOffers(...args: any[]): any;
  getAcknowledgedOffers(...args: any[]): any;
  getUnacknowledgedDiscountOffers(...args: any[]): any;
  getUnacknowledgedOffers(...args: any[]): any;
  hasAnyUnexpiredOffer(...args: any[]): any;
  hasAnyUnexpiredDiscountOffer(...args: any[]): any;
  canFractionalPremiumUserUseOffer(...args: any[]): any;
  getReferrer(...args: any[]): any;
  getState(...args: any[]): any;
  forceReset(...args: any[]): any;
  lastFetchSuccessful(...args: any[]): any;
}

interface UserProfileStore {
  isSubmitting: any;
  initialize(...args: any[]): any;
  isFetchingProfile(...args: any[]): any;
  isFetchingFriends(...args: any[]): any;
  getUserProfile(...args: any[]): any;
  getGuildMemberProfile(...args: any[]): any;
  getMutualFriends(...args: any[]): any;
  getMutualFriendsCount(...args: any[]): any;
  getMutualGuilds(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
}

interface UserRequiredActionStore {
  hasAction(...args: any[]): any;
  getAction(...args: any[]): any;
}

interface UserSettingsAccountStore {
  getFormState(...args: any[]): any;
  getErrors(...args: any[]): any;
  showNotice(...args: any[]): any;
  getIsSubmitDisabled(...args: any[]): any;
  getPendingAvatar(...args: any[]): any;
  getPendingGlobalName(...args: any[]): any;
  getPendingBanner(...args: any[]): any;
  getPendingBio(...args: any[]): any;
  getPendingPronouns(...args: any[]): any;
  getPendingAccentColor(...args: any[]): any;
  getPendingThemeColors(...args: any[]): any;
  getPendingAvatarDecoration(...args: any[]): any;
  getPendingNameplate(...args: any[]): any;
  getPendingProfileEffectId(...args: any[]): any;
  getAllPending(...args: any[]): any;
  getTryItOutThemeColors(...args: any[]): any;
  getTryItOutAvatar(...args: any[]): any;
  getTryItOutAvatarDecoration(...args: any[]): any;
  getTryItOutProfileEffectId(...args: any[]): any;
  getTryItOutBanner(...args: any[]): any;
  getAllTryItOut(...args: any[]): any;
}

interface UserSettingsModalStore {
  onClose: any;
  initialize(...args: any[]): any;
  hasChanges(...args: any[]): any;
  isOpen(...args: any[]): any;
  getPreviousSection(...args: any[]): any;
  getSection(...args: any[]): any;
  getSubsection(...args: any[]): any;
  getScrollPosition(...args: any[]): any;
  shouldOpenWithoutBackstack(...args: any[]): any;
  getProps(...args: any[]): any;
}

interface UserSettingsOverridesStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getAppliedOverrideReasonKey(...args: any[]): any;
  getOverride(...args: any[]): any;
}

interface UserSettingsProtoStore {
  settings: any;
  frecencyWithoutFetchingLatest: any;
  wasMostRecentUpdateFromServer: any;
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  computeState(...args: any[]): any;
  hasLoaded(...args: any[]): any;
  getFullState(...args: any[]): any;
  getGuildFolders(...args: any[]): any;
  getGuildRecentsDismissedAt(...args: any[]): any;
  getDismissedGuildContent(...args: any[]): any;
  getGuildDismissedContentState(...args: any[]): any;
  getGuildsProto(...args: any[]): any;
}

interface UserStore {
  initialize(...args: any[]): any;
  takeSnapshot(...args: any[]): any;
  handleLoadCache(...args: any[]): any;
  getUserStoreVersion(...args: any[]): any;
  getUser(...args: any[]): any;
  getUsers(...args: any[]): any;
  forEach(...args: any[]): any;
  findByTag(...args: any[]): any;
  filter(...args: any[]): any;
  getCurrentUser(...args: any[]): any;
}

interface VerifiedKeyStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getKeyTrustedAt(...args: any[]): any;
  isKeyVerified(...args: any[]): any;
  getUserIds(...args: any[]): any;
  getUserVerifiedKeys(...args: any[]): any;
}

interface VideoBackgroundStore {
  videoFilterAssets: any;
  hasBeenApplied: any;
  hasUsedBackgroundInCall: any;
  initialize(...args: any[]): any;
}

interface VideoQualityModeStore {
  mode: any;
}

interface VideoSpeakerStore {
  initialize(...args: any[]): any;
  getSpeaker(...args: any[]): any;
}

interface VideoStreamStore {
  getStreamId(...args: any[]): any;
  getUserStreamData(...args: any[]): any;
  getTimedoutVideos(...args: any[]): any;
  getTimedoutVideo(...args: any[]): any;
}

interface ViewHistoryStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  hasViewed(...args: any[]): any;
}

interface VirtualCurrencyStore {
  earnedOrbsCoachmark: any;
  redeemError: any;
  isRedeeming: any;
  redeemingSkuId: any;
  entitlements: any;
  balance: any;
  fetchBalanceError: any;
  isFetchingBalance: any;
  onboardingModalOpenedPrior: any;
  balancePillOverlay: any;
  setBalancePillOverlay(...args: any[]): any;
  getCurrentBalance(...args: any[]): any;
  handleBalanceStateReset(...args: any[]): any;
  handleBalanceFetch(...args: any[]): any;
  handleBalanceFetchSuccess(...args: any[]): any;
  handleBalanceFetchFail(...args: any[]): any;
  handleBalanceUpdate(...args: any[]): any;
  handleRedeemVirtualCurrencyStart(...args: any[]): any;
  handleRedeemVirtualCurrencySuccess(...args: any[]): any;
  handleRedeemVirtualCurrencyFail(...args: any[]): any;
  handleOnboardingModalOpen(...args: any[]): any;
  handleOnboardingModalReset(...args: any[]): any;
  handleEarnedOrbsCoachmarkOpen(...args: any[]): any;
  handleEarnedOrbsCoachmarkClose(...args: any[]): any;
}

interface VoiceChannelEffectsPersistedStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
}

interface VoiceChannelEffectsStore {
  recentlyUsedEmojis: any;
  isOnCooldown: any;
  effectCooldownEndTime: any;
  getEffectForUserId(...args: any[]): any;
}

interface VoiceFilterPersistedStore {
  initialize(...args: any[]): any;
  getState(...args: any[]): any;
  getLastInitAttemptMayHaveCrashed(...args: any[]): any;
}

interface VoiceFilterStore {
  getVoiceFilterModels(...args: any[]): any;
  getVoiceFilters(...args: any[]): any;
  getVoiceFilter(...args: any[]): any;
  getModelState(...args: any[]): any;
  getOngoingDownloads(...args: any[]): any;
  isVoiceFilterDownloaded(...args: any[]): any;
  isModelDownloaded(...args: any[]): any;
  getSortedVoiceFilters(...args: any[]): any;
  getCatalogLastFetchTime(...args: any[]): any;
  getCatalogUpdateTime(...args: any[]): any;
  getLimitedTimeVoices(...args: any[]): any;
  isNativeModuleLoaded(...args: any[]): any;
  isNativeModuleLoading(...args: any[]): any;
  hasNativeModuleFailed(...args: any[]): any;
  getCatalogFetchFailed(...args: any[]): any;
  getError(...args: any[]): any;
  getLastReportedLagTimestamp(...args: any[]): any;
}

interface VoiceStateStore {
  userHasBeenMovedVersion: any;
  getAllVoiceStates(...args: any[]): any;
  getVoiceStateVersion(...args: any[]): any;
  getVoiceStates(...args: any[]): any;
  getVoiceStatesForChannel(...args: any[]): any;
  getVideoVoiceStatesForChannel(...args: any[]): any;
  getVoiceState(...args: any[]): any;
  getDiscoverableVoiceState(...args: any[]): any;
  getVoiceStateForChannel(...args: any[]): any;
  getVoiceStateForUser(...args: any[]): any;
  getDiscoverableVoiceStateForUser(...args: any[]): any;
  getVoiceStateForSession(...args: any[]): any;
  getUserVoiceChannelId(...args: any[]): any;
  getCurrentClientVoiceChannelId(...args: any[]): any;
  getUsersWithVideo(...args: any[]): any;
  isCurrentClientInVoiceChannel(...args: any[]): any;
  isInChannel(...args: any[]): any;
  hasVideo(...args: any[]): any;
  getVoicePlatformForChannel(...args: any[]): any;
}

interface WarpClientStore {
  state: any;
  log: any;
  clientEnabled: any;
  enabled: any;
  connecting: any;
  initialize(...args: any[]): any;
  logEvent(...args: any[]): any;
  updateState(...args: any[]): any;
  addListener(...args: any[]): any;
  runCommand(...args: any[]): any;
  install(...args: any[]): any;
  promptInstall(...args: any[]): any;
  configureLicense(...args: any[]): any;
  configureExceptions(...args: any[]): any;
  configureMode(...args: any[]): any;
  connect(...args: any[]): any;
  disconnect(...args: any[]): any;
}

interface WebAuthnStore {
  hasCredentials: any;
  hasFetchedCredentials(...args: any[]): any;
  getCredentials(...args: any[]): any;
}

interface WebhooksStore {
  error: any;
  isFetching(...args: any[]): any;
  getWebhooksForGuild(...args: any[]): any;
  getWebhooksForChannel(...args: any[]): any;
}

interface WelcomeScreenStore {
  get(...args: any[]): any;
  isFetching(...args: any[]): any;
  hasError(...args: any[]): any;
  hasSeen(...args: any[]): any;
  isEmpty(...args: any[]): any;
}

interface WindowStore {
  isFocused(...args: any[]): any;
  isAppFocused(...args: any[]): any;
  isVisible(...args: any[]): any;
  getFocusedWindowId(...args: any[]): any;
  getLastFocusedWindowId(...args: any[]): any;
  isElementFullScreen(...args: any[]): any;
  windowSize(...args: any[]): any;
}

interface WowMomentConfirmationStore {
  isDisplayingWowMomentConfirmation: any;
  getState(...args: any[]): any;
}

interface scheduledMessageStore {
  loading: any;
  getMessagesPendingDeletion(...args: any[]): any;
  getScheduledMessagesForInbox(...args: any[]): any;
  getPendingScheduledMessage(...args: any[]): any;
}
