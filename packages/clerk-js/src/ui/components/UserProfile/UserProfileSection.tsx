import { useUser } from '@clerk/shared/react';

import { Button, localizationKeys } from '../../customizables';
import { ProfileSection, UserPreview } from '../../elements';
import { Action } from '../../elements/Action';
import { useActionContext } from '../../elements/Action/ActionRoot';
import { ProfileForm } from './ProfileForm';

const ProfileScreen = () => {
  const { close } = useActionContext();
  return (
    <ProfileForm
      onSuccess={close}
      onReset={close}
    />
  );
};

export const UserProfileSection = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const { username, primaryEmailAddress, primaryPhoneNumber, ...userWithoutIdentifiers } = user;

  return (
    <ProfileSection.Root
      title={localizationKeys('userProfile.start.profileSection.title')}
      id='profile'
    >
      <Action.Root>
        <Action.Closed value='edit'>
          <ProfileSection.Item id='profile'>
            <UserPreview user={userWithoutIdentifiers} />

            <Action.Trigger value='edit'>
              <Button
                id='profile'
                variant='ghost'
                localizationKey={localizationKeys('userProfile.start.profileSection.primaryButton')}
              />
            </Action.Trigger>
          </ProfileSection.Item>
        </Action.Closed>

        <Action.Open value='edit'>
          <Action.Card>
            <ProfileScreen />
          </Action.Card>
        </Action.Open>
      </Action.Root>
    </ProfileSection.Root>
  );
};
