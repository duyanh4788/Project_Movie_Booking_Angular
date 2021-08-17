import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class ValidationMatchPass {
    static match(passWord: string, checkpassWord: string): ValidatorFn {
        return (controls: AbstractControl) => {
            const pass = controls.get(passWord);
            const checkPass = controls.get(checkpassWord);

            if (checkPass?.errors && !checkPass.errors.matching) {
                return null;
            }

            if (pass?.value !== checkPass?.value) {
                controls.get(checkpassWord)?.setErrors({ matching: true });
                return { matching: true };
            } else {
                return null;
            }
        };
    }
}