// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const FINISHED = 999;

export const OnboardingTaskCategory = 'onboarding_task_list';

// Whole task list is based on these
export const OnboardingTasksName = {
    CHANNELS_TOUR: 'channels_tour',
    BOARDS_TOUR: 'boards_tour',
    PLAYBOOKS_TOUR: 'playbooks_tour',
    INVITE_PEOPLE: 'invite_people',
    DOWNLOAD_APP: 'download_app',
    COMPLETE_YOUR_PROFILE: 'complete_your_profile',
    VISIT_SYSTEM_CONSOLE: 'visit_system_console',
};

export const OnboardingTaskList = {
    ONBOARDING_TASK_LIST_OPEN: 'onboarding_task_list_open',
    ONBOARDING_TASK_LIST_SHOW: 'onboarding_task_list_show',
    ONBOARDING_VIDEO_MODAL: 'onboarding_video_modal',
};

export const GenericTaskSteps = {
    START: 0,
    STARTED: 1,
    FINISHED,
};

export const TaskNameMapToSteps = {
    [OnboardingTasksName.CHANNELS_TOUR]: GenericTaskSteps,
    [OnboardingTasksName.BOARDS_TOUR]: GenericTaskSteps,
    [OnboardingTasksName.PLAYBOOKS_TOUR]: GenericTaskSteps,
    [OnboardingTasksName.COMPLETE_YOUR_PROFILE]: GenericTaskSteps,
    [OnboardingTasksName.DOWNLOAD_APP]: GenericTaskSteps,
    [OnboardingTasksName.VISIT_SYSTEM_CONSOLE]: GenericTaskSteps,
    [OnboardingTasksName.INVITE_PEOPLE]: GenericTaskSteps,
};

