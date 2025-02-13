import { useWizard, Wizard } from '../../common';
import { Button, descriptors, localizationKeys, Text } from '../../customizables';
import type { FormProps } from '../../elements';
import { FormButtonContainer, FormContent, withCardStateProvider } from '../../elements';
import { useActionContext } from '../../elements/Action/ActionRoot';
import { MfaBackupCodeCreateForm } from './MfaBackupCodeCreateForm';
import { UserProfileBreadcrumbs } from './UserProfileNavbar';

type MfaBackupCodeScreenProps = FormProps;
export const MfaBackupCodeScreen = withCardStateProvider((props: MfaBackupCodeScreenProps) => {
  const { onSuccess, onReset } = props;
  const wizard = useWizard();

  return (
    <Wizard {...wizard.props}>
      <AddBackupCode onContinue={wizard.nextStep} />

      <MfaBackupCodeCreateForm
        onSuccess={onSuccess}
        onReset={onReset}
      />
    </Wizard>
  );
});

type AddBackupCodeProps = {
  onContinue: () => void;
};

const AddBackupCode = (props: AddBackupCodeProps) => {
  const { onContinue } = props;
  const { close } = useActionContext();

  return (
    <FormContent
      headerTitle={localizationKeys('userProfile.backupCodePage.title')}
      Breadcrumbs={UserProfileBreadcrumbs}
    >
      <Text localizationKey={localizationKeys('userProfile.backupCodePage.infoText1')} />
      <Text localizationKey={localizationKeys('userProfile.backupCodePage.infoText2')} />

      <FormButtonContainer sx={{ marginTop: 0 }}>
        <Button
          textVariant='buttonSmall'
          onClick={onContinue}
          localizationKey={localizationKeys('userProfile.formButtonPrimary__finish')}
          elementDescriptor={descriptors.formButtonPrimary}
        />

        <Button
          variant='ghost'
          onClick={close}
          localizationKey={localizationKeys('userProfile.formButtonReset')}
          elementDescriptor={descriptors.formButtonReset}
        />
      </FormButtonContainer>
    </FormContent>
  );
};
