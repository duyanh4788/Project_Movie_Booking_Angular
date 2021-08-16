export interface MoviePagination {
    currentPage: number;
    count: number;
    totalPages: number;
    totalCount: number;
    items: ItemMovie[];
}
export interface ItemMovie {
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

export interface GreatSchedule {
    maPhim: number;
    ngayChieuGioChieu: string;
    maRap: number;
    giaVe: number;
}


export interface InfoCinema {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
}

export interface InfoGroupCinema {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: DanhSachRap[];
}
export interface DanhSachRap {
    maRap: number;
    tenRap: string;
}
export interface GreatSchedule {
    maPhim: number;
    ngayChieuGioChieu: string;
    maRap: number;
    giaVe: number;
}
