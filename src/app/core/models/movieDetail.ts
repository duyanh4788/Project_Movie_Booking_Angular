export interface MovieDetail {
    lichChieu: [];
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: Date;
    danhGia: number;
}

export interface LogoCinemaMovieDetail {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
}

export interface ScheDuleMovie {
    giaVe: number;
    maLichChieu: number;
    maPhim: number;
    maRap: number;
    ngayChieuGioChieu: string;
    tenPhim: string;
    thoiLuong: number
    thongTinRap: ThongTinRap;
}

export interface ThongTinRap {
    maCumRap: string;
    maHeThongRap: string;
    maRap: number;
    tenCumRap: string;
    tenHeThongRap: string;
    tenRap: string;
}

export interface ImagesCinema {
    code: string;
    img: string;
}

export interface ScheDuleListMovie {
    giaVe: number;
    maLichChieu: number;
    maPhim: number;
    maRap: number;
    ngayChieuGioChieu: string;
    tenPhim: string;
    thoiLuong: number;
    thongTinRap: {
        maCumRap: string;
        maHeThongRap: string;
        maRap: number;
        tenCumRap: string;
        tenHeThongRap: string;
        tenRap: string;
    }
}