export interface ListTicket {
    thongTinPhim: ThongTinPhim;
    danhSachGhe: DanhSachGhe[];
}
export interface DanhSachGhe {
    choiceChair: Boolean;
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: LoaiGhe;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: null | string;
}
export enum LoaiGhe {
    Thuong = "Thuong",
    Vip = "Vip",
}
export interface ThongTinPhim {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
}

export interface BookingChair {
    choiceChair: boolean;
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: LoaiGhe;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: string | null;
}