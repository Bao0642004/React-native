const SAMPLE_DATA = [
    {
      id: 1,
      name: "Paracetamol",
      Gia:"1.500",
      image1: "https://www.mediplantex.com/upload/product/thumbs/8594648bd43d66f8f602e77c7cccf242.jpg",
      Mota: " một loại thuốc giảm đau vô cùng phổ biến, thường có mặt trong tủ thuốc gia đình hay các đơn thuốc.",
    },
    {
      id: 2,
      name: "Alphachymotrylsil",
      Gia:"1.500",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTispksqMsNdvpNhFBy6VWnl9ePqfBpexIroA&s",
      Mota: " Thuốc Alpha chymotrypsin là một enzym phân giải protein, được điều chế bằng cách hoạt hóa chymotrypsinogen chiết xuất từ tụy bò. ",
    },
    {
      id: 3,
      name: " Ibuprofen",
      Gia:" 2.000",
      image1: "https://cdn.thegioididong.com/Products/Images/10023/181262/ibuprofen-400mg-ftpharma-2.jpg",
      Mota:"thuốc hoạt động bằng cách giảm các hóc môn gây viêm và đau trong cơ thể, thuốc được dùng để hạ sốt, giảm đau  hoặc viêm do các nguyên nhân như đau đầu, đau răng, đau lưng, viêm khớp, đau bụng kinh hoặc chấn thương nhẹ.",
    },
    {
      id: 4,
      name: "Ciprofloxaxin",
      Gia:"1.500",
      image1: "https://cdn.thegioididong.com/Products/Images/10026/246941/pms-ciprofloxacin-500mg-mac-dinh-2.jpg",
      Mota: "Thuốc Ciprofloxaxin là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
    },
    {
      id: 5,
      name: "alpha choay",
      Gia:"1.000",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBKlENfgSCix0mXpkpNGe1h8pm23H6Ncom_Q&s",
      Mota:"thuốc hoạt động bằng cách giảm các hóc môn gây viêm và đau trong cơ thể, thuốc được dùng để hạ sốt, giảm đau  hoặc viêm do các nguyên nhân như đau đầu, đau răng, đau lưng",
    },
    {
      id: 6,
      name: "methylprednisolon",
       Gia:"500",
      image1: "https://cdn.thegioididong.com/Products/Images/10023/309560/methylprednisolone-stada-16mg-khang-viem-mac-dinh-2.jpg",
      Mota: "Thuốc methylprednisolon là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
    },
    {
      id: 7,
      name: "Cetirizin",
       Gia:"500",
      image1: "https://baobaopharma.com/wp-content/uploads/2024/06/ceti-1dadfeca-05d1-4579-83e0-7f74f6d7879c.webp",
      Mota: "Thuốc Cetirizin là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
    },
    {
        id: 8,
        name: "Loratadine",
        Gia:"1.500",
        image1: "https://medlatec.vn/media/35928/file/Thuoc-Loratadine-dang-vien-nen.jpg",
        Mota: "Thuốc Loratadine là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 9,
        name: "Theralen",
         Gia:"1.500",
        image1: "https://www.vinmec.com/static/uploads/20220312_164148_765471_theralene_5mg_max_1800x1800_jpg_cdf7fda833.jpg",
        Mota: "Thuốc Theralen là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 10,
        name: "Aciclovir",
         Gia:"1.200",
        image1: "https://agimexpharm.com/wp-content/uploads/2018/09/Agiclovir-200-7.jpg",
        Mota: "Thuốc Aciclovir là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 11,
        name: "Bromhexin",
         Gia:"1.000",
        image1: "https://cdn.thegioididong.com/Products/Images/10248/153225/bromhexin-8-mg-mac-dinh-2.jpg",
        Mota: "Thuốc Bromhexin là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 12,
        name: "Acetylcycteinx",
         Gia:"300",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00028233_acetylcystein_200mg_imexpharm_10x10_1242_60ab_large_25062dc0eb.jpg",
        Mota: "Thuốc Acetylcycteinx là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 13,
        name: "Omeprazolx",
         Gia:"1.300",
        image1: "https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2020/05/thuo%CC%82%CC%81c-omeprazol.jpg",
        Mota: "Thuốc Omeprazol là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 14,
        name: "Rabeprazol",
        Gia: "1.000",
        image1: "https://product.hstatic.net/200000142961/product/gia_soc_bat_ngo__2__a9c30b88249148968ee7a95b5adc25e7.png",
        Mota: "Thuốc Rabeprazol là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      {
        id: 15,
        name: "Esomeprazol",
        Gia:"300",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00020370_esomeprazol_40mg_tim_hv_3x10_6097_5d5f_large_244ccf8953.JPG",
        Mota: "Thuốc Esomeprazol là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t��n thương tim và cơ thể.",
      },
      //dang bop
      {
        id: 16,
        name: "Dibetalic",
         Gia:"20.000",
         GiaH:"20.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3123_9b72fdfcee.jpg",
        Mota: "Thuốc Dibetalic là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },
      {
        id: 17,
        name: "Silkaon",
         Gia:"20.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00006704_silkron_10g_6352_5ceb_large_ad480d9ee2.JPG",
        Mota: "Thuốc Silkaon là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },
      {
        id: 18,
        name: "Gentriso",
        Gia:"20.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00003298_gentrisone_10g_4895_60c1_large_0339871efe.jpg",
        Mota: "Thuốc Gentriso là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },
      {
        id: 19,
        name: "Tomax",
         Gia:"20.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_4689_2578bd2409.jpg",
        Mota: "Thuốc Tomax là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },
      {
        id: 20,
        name: "Kedermfa",
        Gia:"20.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00004078_kedermfa_5g_9685_5b39_large_fae61e7c8d.JPG",
        Mota: "Thuốc Kedermfa là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },      
      {
        id: 21,
        name: "Aciclovir",
         Gia:"25.000",
        image1: "https://khoevadeppharmacy.com/wp-content/uploads/2024/02/ACICLOVIR-5-VCP.jpg",
        Mota: "Thuốc Aciclovir là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },  
      {
        id: 22,
        name: "Kentax",
         Gia:"25.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_4679_ef9b4f562d.jpg",
        Mota: "Thuốc Kentax là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },  
      {
        id: 23,
        name: "Dermovate",
         Gia :"27.000",
        image1: "https://cdn.thegioididong.com/Products/Images/10037/131087/dermovate-cream-15g-mac-dinh-2.jpg",
        Mota: "Thuốc Dermovate là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },  
      {
        id: 24,
        name: "Flucina",
         Gia:"70.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00003096_flucinar_15g_5502_6103_large_53b028bdbd.jpg",
        Mota: "Thuốc Flucina là một loại thuốc chống viêm đông, chống lão hông và chống bệnh tim mạch, dùng để giảm t�n thương tim và cơ thể.",
      },  
      //dang nuoc
      {
        id: 25,
        name: "Sire ho ông vàng",
         Gia:"40.000",
        image1: "https://product.hstatic.net/200000124701/product/00011153_siro_ho_ong_vang_8255_5c51_large_9dbd011652_f0e3315b4230427ba97b96f90fa41c60.jpg",
        Mota: "Siro Ho Ong Vàng hỗ trợ làm ấm và sạch họng, giảm ho, giảm đau họng, rát cổ, khản tiếng.",
      },  
      {
        id: 26,
        name: "prospan forte",
         Gia:"37.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00029664_prospan_forte_100ml_7533_61e6_large_80fb340598.jpg",
        Mota: "Trị viêm đường hô hấp kèm theo ho, các bệnh viêm phế quản mạn tính",
      },  
      {
        id: 27,
        name: "Atersin",
         Gia:"40.000",
        image1: "https://cdn.thegioididong.com/Products/Images/10028/298804/atersin-5ml-0.jpg",
        Mota: "Run chân tay, nhức đầu, chóng mặt Cảm giác bồn chồn, đánh trống ngực Chuột rút bàn chân hoặc bàn tay",
      },  
      {
        id: 28,
        name: "At ibuprofen",
         Gia:"40.000",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG3Q0CsQfuKlbVLeez0OgnPYeDK4mQDGSyw&s",
        Mota: "huốc A.T Ibuprofen Syrup (ống) được bào chế dạng hỗn dịch uống nên bệnh nhân sử dụng thuốc bằng đường uống, uống trực tiếp hoặc pha loãng với 30 50 ml nước.",
      }, 
      {
        id: 29,
        name: "Yummangel",
         Gia:"2.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1552_f6fe14d42c.jpg",
        Mota:"Yumangel hay còn gọi là thuốc dạ dày chữ Y của công ty Yuhan Corporation (Hàn Quốc), thành phần chính almagate, là thuốc có tác dụng kháng acid và cải thiện các chứng bệnh sau: Loét dạ dày, loét tá tràng; viêm dạ dày; các chứng bệnh do tăng tiết acid (ợ nóng, buồn nôn, nôn, đau dạ dày, chứng ợ); bệnh trào ngược thực quản.",
      }, 
      {
        id: 30,
        name: "osla",
         Gia:"30.000",
        image1: "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/P00541_3.jpg",
        Mota:"Rửa mắt, giảm mỏi mắt, ngứa mắt, khô rát mắt, làm việc nhiều trên máy tính"
      }, 
      {
        id: 31,
        name: "V.Rohto",
        Gia:"30.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1743_1cbab5469a.jpg",
        Mota:"Thuốc nhỏ mắt New V.Rohto màu xanh là sản phẩm của Rohto Mentholatum có thành phần chính gồm Vitamin B6 và Panthenol dạng dung dịch trong, không màu để trị mỏi mắt, đỏ mắt và giữ ẩm cho mắt."
      }, 
      {
        id: 32,
        name: "Cồn 90",
         Gia:"10.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_4879_ba8f3471f0.jpg",
        Mota:"Cồn 90 là sản phẩm của Rohto Mentholatum có thành phần chính gồm Vitamin B6 và Panthenol dạng dung dịch trong, không màu để trị m��i mắt, đ�� mắt và giữ ẩm cho mắt."
      }, 
      {
        id: 33,
        name: "Providine",
         Gia:"40.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00006050_povidine_20ml_1226_5bf4_large_dd75c0d90b.JPG",
        Mota: "Thuốc Providine là sản phẩm của Rohto Mentholatum có thành phần chính gồm Vitamin B6 và Panthenol dạng dung dịch trong, không màu để trị m��i mắt, đ�� mắt và giữ ẩm cho mắt."
      }, 
      {
        id: 34,
        name: "magnesi b6",
         Gia:"4.000",
        image1: "https://www.pharmart.vn/images/product/430_430/thuoc-magnesi-b6-dai-uy-bo-sung-magie-va-giam-dau-dau-mat-ngu-661cf13fb93df.jpg",
        Mota: "Thuốc Magnesi B6 là sản phẩm của Rohto Mentholatum có thành phần chính gồm Vitamin B6 và Panthenol dạng dung dịch trong, không màu để trị m��i mắt, đánh trống ngực và giữ ẩm cho mắt."
      }, 
      {
        id: 35,
        name: "pharmaceraton",
         Gia:"3.000",
        image1: "https://down-vn.img.susercontent.com/file/dd3241f868132aff5041d4824d27819b",
        Mota: "Thuốc Pharmaceraton là sản phẩm của Rohto Mentholatum có thành phần chính gồm Vitamin B6 và Panthenol dạng dung dịch trong, không màu để trị m��i mắt, đánh trống ngực và giữ ẩm cho mắt."
      }, 
      {
        id: 36,
        name: "wit",
         Gia:"2.500",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00009959_wit_vien_uong_bo_mat_cua_my_bao_ve_mat_tu_ben_trong_4914_6328_large_0ad140c02f.jpg",
        Mota: "Sản phẩm Wit chứa tinh chất từ Broccophane thiên nhiên giúp hỗ trợ tăng Thioredoxin, bảo vệ tế bào biểu mô sắc tố võng mạc và thủy tinh thể."
      }, 
      {
        id: 37,
        name: "Gadacal",
         Gia:"4.000",
        image1: "https://cdnv2.tgdd.vn/mwg-static/ankhang/Products/Images/10053/309495/dung-dich-uong-gadacal-bo-sung-calci-lysin-va-cac-vitamin-cho-co-the-01-638642519255368856.jpg",
        Mota: "LLà thuộc nhóm thuốc giúp bổ sung canxi, vitamin và các khoáng chất thiết yếu cho cơ thể trẻ, giúp bé ăn ngon, phát triển khỏe mạnh và dự phòng các tình trạng thiếu dinh dưỡng hoặc suy nhược cơ thể. Thuốc Gadacal được bào chế dưới dạng dung dịch uống và đóng gói theo quy cách hộp 10 ống × 10ml hoặc hộp 20 ống × 10ml.",
      }, 
      {
        id: 38,
        name: "Philatop",
         Gia: "3.000",
        image1: "https://www.pharmart.vn/images/product/430_430/philatop-new-ong-nhua-632d8b0f10817.jpg",
        Mota:"một loại thuốc bổ hay dịch chiết có nguồn gốc đạm thủy phân từ phủ - tạng của động vật và bao gồm 16 loại axit amin thiết yếu, rất cần thiết và phù hợp cho những đối tượng thiếu hụt chất dinh dưỡng. Thuốc Philatop được đóng gói vô cùng thuận tiện cho mục đích sử dụng, bao gồm 20 ống được đóng gói trong một hộp, mỗi ống có dung tích vừa đủ là 10ml – phù hợp với mọi đối tượng từ người lớn đến trẻ em có thể dùng cho một lần uống.",
      },
      {
        id: 39,
        name: "R_fogyma",
         Gia:"5.000",
        image1: "https://nhathuocthanthien.com.vn/wp-content/uploads/2021/10/dgm_nttt_fogyma.jpg",
        Mota: "TThuốc Fogyma được sản xuất bởi Công ty Cổ phần Dược phẩm CPC1 Hà Nội, có chứa Sắt nguyên tố dưới dạng phức hợp sắt (III) hydroxyd polymaltose, được chỉ định để bổ sung sắt cho bệnh nhân có nguy cơ bị thiếu máu do thiếu sắt như phụ nữ mang thai, phụ nữ cho con bú, người suy dinh dưỡng, người bệnh sau phẫu thuật, trẻ em thiếu máu do thiếu sắt, chậm lớn, còi cọc.",
      },
      //dangj khacs
      {
        id: 40,
        name: "Bông ý tế",
         Gia:"4.000",
        image1: "https://dungcuykhoatiendung.com/files/sanpham/835/1/jpg/bong-gon-y-te-bao-thach-5g.jpg",
        Mota: "Bông ý tế là dùng để đánh trướng trứng trắng, xóa răng, làm sạch, chữa bệnh, và dùng để điều trị các bệnh nội tiết. Bông ý tế tinh khiết và chất lỏng, giúp đánh trướng trứng trắng",
      },
      {
        id: 41,
        name: "Nước muối",
         Gia:"10.000",
        image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV-g5m8SvUK_LY4FAKGLT1JA87_01V2AwHg&s",
        Mota: "Nước muối là một loại nước đặc biệt có chứa các chất tinh khiết và chất lỏng, giúp tránh trứng trắng, xóa răng, và làm sạch. Nước muối tinh khiết và chất lỏng, giúp đánh trướng trứng trắ",
      },
      {
        id: 42,
        name: "URGO",
         Gia:"1.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00010367_bcn_urgo_durable_102m_5250_62b5_large_c16c5a052e.jpg",
        Mota:" là một thành viên của tập đoàn chăm sóc vết thương hàng đầu thế giới đến từ Pháp"
      },
      {
        id: 43,
        name: "Xisat",
         Gia:"4.000",
        image1: "https://cdn1.concung.com/2023/11/64548-1698835691-trans.png",
        Mota:"Xịt mũi Xisat 75ml giúp loại bỏ gỉ mũi, chất nhầy nhờ cơ chế xịt phun sương, tạo các hạt mịn dễ đi sâu vào khoang mũi, giúp thông thoáng, dễ thở và tạo cảm giác mát dịu. Ngoài ra, sản phẩm nước muối biển xịt mũi Xisat người lớn giúp sát khuẩn, kháng viêm, phòng ngừa sổ mũi, ngạt mũi và viêm xoang."
      },
      {
        id: 44,
        name: "Fugacar",
         Gia:"4.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_2027_d29705fc69.jpg",
        Mota:" Fugacar 500mg không vị  (Mebendazole) là thuốc được sản xuất bởi công ty Olic (Thailand) Limited, Thailand. Fugacar điều trị một hoặc nhiều loại giun kí sinh trong cơ thể người."
      },
      {
        id: 45,
        name: "Ventolin",
         Gia:"1.500",
        image1: "https://production-cdn.pharmacity.io/digital/828x828/plain/e-com/images/ecommerce/P00479_6.jpg",
        Mota:"Ventolin Nebules 2,5mg được sản xuất bởi Công ty Glaxo SmithKline Australia Pty., Ltd - Úc. Thuốc có chứa salbutamol được dùng trong điều trị hen phế quản."
      },
      {
        id: 46,
        name: "Miếng dán con cọp",
         Gia:"2.000",
        image1: "https://cdn.famitaa.com/uploads/noidung/cao-dan-con-cop-cao-trang-cot-chi-thong-xa-huong_00572.jpg",
        Mota:"Miếng dán con cọp là dùng để đánh trướng trứng trắng, xóa răng, làm sạch, chữa bệnh, và dùng để điều trị các bệnh nội tiết. Miếng dán con cọp tinh khiết và chất lỏng",
      },
      {
        id: 47,
        name: "Khẩu Trang y tế",
         Gia:"1.000",
        image1: "https://cdn.thegioididong.com/Products/Images/5872/276366/khau-trang-y-te-truong-duong-4-lop-xanh-hop-50-cai-1.jpg0",
        Mota:"Khẩu trang y tế là một dược phẩm chuyên dùng cho người bệnh như truyền nhi��m bệnh, thông báo các bệnh lý và dịch bệnh, và dùng để điều trị các bệnh nội tiết.",
      },
      {
        id: 48,
        name: "Dầu khuynh diệp",
         Gia:"15.000",
        image1: "https://product.hstatic.net/200000713511/product/dau-khuynh-diep-opc-ho-tro-cam-cum-so-mui-nghet-mui-25ml_983843dd2ab444cdb0778220ac3437a1.jpg",
        Mota:"Dầu khuynh diệp OPC là sản phẩm của Dược phẩm OPC với thành phần chính là Eucalyptol. Dầu khuynh diệp OPC được dùng trong phòng, trị cảm cúm, sổ mũi, nghẹt mũi, ho tức ngực, đau bụng, nhức mỏi, nhức đầu, chóng mặt, buồn nôn, côn trùng đốt, trật gân, sưng.",
      },
      {
        id: 49,
        name: "Dàu trường sơn",
         Gia:"12.000",
        image1: "https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/00002239_dau_gio_truong_son_6ml_12_chai_9997_6423_large_09572ca8a3.jpg",
        Mota:"Dầu nóng Trường Sơn do Công ty Cổ phần Đông Nam Dược Trường Sơn sản xuất, có thành phần chính là Menthol, tinh dầu bạc hà, eucalyptol, methyl salicylat, long não, hương liệu, được dùng trong các trường hợp cảm, ho, sổ mũi, trúng gió, nhức đầu, say tàu xe, xoa bóp chống viêm cảm, muỗi chích, kiến cắn, buồn nôn, đau bụng, nhức mỏi tay chân, đau khớp, trật gân.",
      },
      {
        id: 50,
        name: "Pregnancy test",
         Gia:"40.000",
        image1: "https://rukminim2.flixcart.com/image/850/1000/xif0q/pregnancy-kit/1/n/u/-original-imahf6tfdzfvvprc.jpeg?q=20&crop=false",
        Mota:"Pregnancy test là một dược phẩm chuyên dùng cho người bé để xác nhận tình trạng dinh dưỡng của con đang sống trong lúc sống đầu của một người mẹ, bảo vệ sức khoẻ của mẹ và con, và cảm thông với các dịch bệnh của",
      },
  ];
  
export default SAMPLE_DATA;

export const Users =[
  {
    id: 1,
    username: 'admin',
    password: '123456',
    role: 'admin',
  },

]