export interface ClientPagination {
    currentPage: number;
    count:       number;
    totalPages:  number;
    totalCount:  number;
    items:       Item[];
}

export interface Item {
    taiKhoan:        string;
    matKhau:         string;
    email:           string;
    soDt:            string;
    maNhom:          string;
    maLoaiNguoiDung: string;
    hoTen:           string;
}
