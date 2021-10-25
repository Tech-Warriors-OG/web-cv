import { ItemMultipleT } from "@/component/ItemMultiple";
import { ItemSingleT } from "@/component/ItemSingle";

export const Profile: Array<ItemSingleT | ItemMultipleT> = [
    {
        title: "About us",
        content: "Chúng tôi là một Team về công nghệ, có khả năng xây dựng các hệ thống thông tin phục vụ bán hàng, quản trị doanh nghiệp, nhận diện thương hiệu, và tất cả mọi thứ doanh nghiệp của bạn cần!"

    },
    {
        title: "Our skills",
        contents: [
            {
                titleText: "Website",
                desText: "Chúng tôi có thể xây dựng Website theo yêu cầu của bạn phục vụ các mục đích quản trị, bán hàng, giới thiệu thương hiệu... Chúng tôi có thể xây dựng phát triển từ mẫu sẵn có hoặc xây dựng theo thiết kế của bạn. Với 3 năm kinh nghiệm trong việc phát triển ứng dụng Web, chúng tôi có thể giải quyết mọi yêu cầu."
            },
            {
                titleText: "Mobile Application",
                desText: "Chúng tôi có thể xây dựng ứng dụng cho thiết bị di động cho cả hệ điều hành Android và Ios. Team chúng tôi sẽ thiết kế, phát triển ứng dụng theo nhu cầu của bạn và tư vấn về điều khoản, chính sách của Google, Apple để ứng dụng của bạn có thể có mặt trên cửa hàng của Google và Apple."
            },
            {
                titleText: "Backend Deverloper",
                desText: "Kết hợp với Front-End là Website và Mobie Application, chúng tôi có thể xây dựng Backend theo yêu cầu của về hệ thống của bạn. Chúng tôi có thể sử dụng các công nghệ như Oauth, Google API, Firebase, OneSignal,..."
            }
        ]

    },
    {
        title: "Featured",
        contents: [
            {
                titleText: "iHealing",
                desText: "Hệ thống phục vụ mua, bán dược liệu chăm sóc sức khỏe, hỗ trợ đặt lịch Spa tại nhà hoặc tại các cơ sở liên kết (\"Grab trong ngành spa\"). Ngoài ra còn các tính năng về quản trị, tin tức, thông báo. Chi tiết có tại:",
                refLinks: [
                    { title: "Website", refLink: "https://ihealing.vn/ihealing/#!/home" },
                    { title: "Ch-Play", refLink: "https://play.google.com/store/apps/details?id=beauty.ihealing" },
                    { title: "App-Store", refLink: "https://apps.apple.com/vn/app/ihealing/id1525729417" },
                ]
            },
            {
                titleText: "Eaty",
                desText: "Ứng dụng về dinh dưỡng, giảm cân cung cấp các tính năng về tính toán dinh dưỡng, theo dõi lượng cal nạp vào và tiêu thụ hàng ngày. Tính toán đưa ra các chế độ theo mục tiêu cân nặng đề ra. Ứng dụng đã có hơn 20.000 trên cả hai nền tảng. Chi tiết có tại:",
                refLinks: [
                    { title: "Website", refLink: "https://eatsy.vn/" },
                    { title: "Ch-Play", refLink: "https://play.google.com/store/apps/details?id=vn.com.eatsy" },
                    { title: "App-Store", refLink: "https://apps.apple.com/vn/app/eatsy/id1537221492" },
                ]
            },
            {
                titleText: "Bất động sản BR-VT",
                desText: "Hệ thống hỗ trợ mua bán, kí gửi, thẩm định giá bất động sản với các tính năng đăng bài, gửi thông báo theo khu vực, Social login. Chi tiết tại:",
                refLinks: [
                    { title: "Website", refLink: "https://www.daianreal.com/" },
                    { title: "Ch-Play", refLink: "https://play.google.com/store/apps/details?id=com.bds.brvt" },
                    { title: "App-Store", refLink: "https://apps.apple.com/vn/app/b%E1%BA%A5t-%C4%91%E1%BB%99ng-s%E1%BA%A3n-b%C3%A0-r%E1%BB%8Ba-v%C5%A9ng-t%C3%A0u/id1586002009" },
                ]
            },
            {
                titleText: "Life hacks",
                desText: "Ứng dụng về mẹo vặt trong cuộc sống, đã tích hợp các chức năng social login, trả phí mua hàng trong ứng dụng (IAP),... Ưng dụng đã có trên 600.000 lượt tải trên cửa hàng google và apple",
                refLinks: [
                    { title: "Ch-Play", refLink: "https://play.google.com/store/apps/details?id=rish.crearo.lifehacks" },
                    { title: "App-Store", refLink: "https://apps.apple.com/us/app/scrolla-life-hacks/id1570076164" },
                ]
            },
        ]
    },
    {
        title: "My team",
        contents: [
            {
                titleText: "",
                desText: "Các thành viên của chúng tôi đã có nhiều kinh nghiệm trong lĩnh vực số hóa, xây dựng các hệ thống thông tin, ứng dụng, website doanh nghiệp. Key member:",
                refLinks: [
                    { title: "TL: Đ.H.Phước,", navLink: "#" },
                    { title: "Key Member: N.H.Khánh,", navLink: "#" },
                    { title: "N.Q.Huy,", navLink: "#" },
                    { title: "N.Q.Hưng,", navLink: "#" },
                    { title: "and more", navLink: "#" },
                ]
            }
        ]
    }
]


      // [
        //     { titleText: "Họ và tên", desText: "Đoàn Hữu Phước" },
        //     { titleText: "Vai trò", desText: "Team leader" },
        //     { titleText: "Mô tả", desText: "Chuyên ngành công nghệ thông tin, có vai trò dẫn dắt, quản lý Team trong quá trình phát triển dự án, có sự am hiểu về hệ thống thông tin và các Frame-work ReactJS, React-Native, NodeJS,..." },
        // ]