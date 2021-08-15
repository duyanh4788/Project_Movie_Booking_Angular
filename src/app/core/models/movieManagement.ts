export interface MoviePagination {
    currentPage: number;
    count:       number;
    totalPages:  number;
    totalCount:  number;
    items:       ItemMovie[];
}
export interface ItemMovie {
    maPhim:        number;
    tenPhim:       string;
    biDanh:        string;
    trailer:       string;
    hinhAnh:       string;
    moTa:          string;
    maNhom:        string;
    ngayKhoiChieu: Date;
    danhGia:       number;
}
