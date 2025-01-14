import { Images } from "../../utils/Image"

export const Empty = ({ children = "Tidak ada data untuk ditampilkan" }) => {
    return (
        <div className="col-span-4 h-[24rem] flex flex-col justify-center text-center">
            <img src={Images.Book.empty} alt="empty-docs" className="mx-auto h-72" />
            <span className="mt-4 text-lg text-gray-700">
                {children}
            </span>
        </div>
    );
};
