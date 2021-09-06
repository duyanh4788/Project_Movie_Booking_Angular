import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingService } from "src/app/core/services/loading/loading.service";
import { SigninService } from "src/app/core/services/signin/signin.service";

@Component({
    selector: "app-signin",
    templateUrl: "./signin.component.html",
    styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
    notifySignIn: string = "";
    hide = true;
    userLogin = {
        taiKhoan: "",
        matKhau: "",
    };

    constructor(
        public loadingService: LoadingService,
        private signinService: SigninService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    handleLogin() {
        this.signinService.postSignIn(this.userLogin).subscribe(
            (data) => {
                const { accessToken, hoTen, maLoaiNguoiDung, taiKhoan, ..._data } = data
                // accessToken
                localStorage.setItem("accessToken", JSON.stringify(accessToken));
                this.signinService.setCurrentAccessToken(accessToken)
                // hoTen
                localStorage.setItem("hoTen", JSON.stringify(hoTen))
                this.signinService.setCurrentUserName(hoTen)
                // Account
                localStorage.setItem("taiKhoan", JSON.stringify(taiKhoan))
                this.signinService.setCurrentAccount(taiKhoan)
                // userTypeCode
                localStorage.setItem("maLoaiNguoiDung", JSON.stringify(maLoaiNguoiDung))
                this.signinService.setCurrentUserTypeCode(maLoaiNguoiDung)

                // set params
                const { successUrl } = this.activatedRoute.snapshot.queryParams;
                if (successUrl) {
                    this.loadingService.show();
                    this.router.navigate([successUrl]);
                    this.loadingService.hidden();
                } else {
                    this.router.navigate(["/"]);
                }
            },
            (error) => {
                console.log(error.error);
                this.notifySignIn = error.error;
            }
        );
    }

    ngOnInit(): void {
        this.loadingService.hidden();
    }
}
