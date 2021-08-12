export interface ArrayListMovieDropdown {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: string;
    danhGia: number;
}

export interface GroupCinema {
    heThongRapChieu: any[];
    maPhim:          number;
    tenPhim:         string;
    biDanh:          string;
    trailer:         string;
    hinhAnh:         string;
    moTa:            string;
    maNhom:          string;
    ngayKhoiChieu:   Date;
    danhGia:         number;
}