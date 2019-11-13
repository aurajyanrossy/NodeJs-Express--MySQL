

var response = require('./res');
var connection = require('./conn');

//LOGIN

// exports.login = function(req,res){
//   var nama_pegawai= req.body.nama_pegawai;
//   var pass_akun_peg = req.body.pass_akun_peg;
//   connection.query('SELECT * FROM pegawai WHERE nama_pegawai = ?',[nama_pegawai], function (error, results, fields) {
//   if (error) {
//     // console.log("error ocurred",error);
//     res.send({
//       "code":400,
//       "failed":"error ocurred"
//     })
//   }else{
//     // console.log('The solution is: ', results);
//     if(results.length >0){
//       if(results[0].pass_akun_peg == pass_akun_peg){
//         res.send({
//           "code":200,
//           "success":"Welcome " + nama_pegawai
//             });
//       }
//       else{
//         res.send({
//           "code":204,
//           "success":"Nama Pegawai and Password Does Not Match"
//             });
//       }
//     }
//     else{
//       res.send({
//         "code":204,
//         "success":"Nama Pegawai Does Not Excist"
//           });
//     }
//   }
//   });  
// };


//PERUSAHAAN
exports.DataPerusahaan = function (req, res) {
    connection.query('SELECT * FROM data_perusahaan ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };


  exports.InsertDataPerusahaan = function (req, res, next) {
    // var id_perusahaan = req.body.id_perusahaan;
    var nama_perusahaan = req.body.nama_perusahaan;
    var alamat_perusahaan= req.body.alamat_perusahaan;
    var telp_perusahaan = req.body.telp_perusahaan;
    var id_kab = req.body.id_kab; 
    var kategori_perusahaan = req.body.kategori_perusahaan;
    var nama_pic = req.body.nama_pic;
    var email_pic = req.body.email_pic;
    var telp_pic = req.body.telp_pic;
    var jabatan_pic = req.body.jabatan_pic;
    var isp = req.body.isp;
    var jasa_produk = req.body.jasa_produk;
    var bandwidth = req.body.bandwidth;
    var lastmile = req.body.lastmile;
    var tarif_bulan = req.body.tarif_bulan;
    var periode_kontrak = req.body.periode_kontrak;
    var keterangan = req.body.keterangan;

    connection.query('INSERT INTO data_perusahaan (nama_perusahaan, telp_perusahaan, alamat_perusahaan, id_kab, kategori_perusahaan, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [nama_perusahaan, telp_perusahaan, alamat_perusahaan, id_kab, kategori_perusahaan, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows.insertId , res)

        }
        
    });
    
};


exports.UpdateDataPerusahaan = function(req, res, params) {
    
    var nama_perusahaan = req.body.nama_perusahaan;
    var alamat_perusahaan= req.body.alamat_perusahaan;
    var telp_perusahaan = req.body.telp_perusahaan;
    var id_kab = req.body.id_kab;
    var kategori_perusahaan = req.body.kategori_perusahaan;
    var nama_pic = req.body.nama_pic;
    var email_pic = req.body.email_pic;
    var telp_pic = req.body.telp_pic;
    var jabatan_pic = req.body.jabatan_pic;
    var isp = req.body.isp;
    var jasa_produk = req.body.jasa_produk;
    var bandwidth = req.body.bandwidth;
    var lastmile = req.body.lastmile;
    var tarif_bulan = req.body.tarif_bulan;
    var periode_kontrak = req.body.periode_kontrak;
    var keterangan = req.body.keterangan;
    var id_perusahaan = req.params.id_perusahaan;

  connection.query('UPDATE data_perusahaan SET nama_perusahaan = ?, alamat_perusahaan = ?, telp_perusahaan = ?, id_kab = ?, kategori_perusahaan = ?, nama_pic = ?, email_pic = ?, telp_pic = ?, jabatan_pic = ?, isp = ?, jasa_produk = ?, bandwidth = ?, lastmile = ?, tarif_bulan = ?, periode_kontrak = ?, keterangan = ? WHERE id_perusahaan = ?',
  [nama_perusahaan, alamat_perusahaan, telp_perusahaan, id_kab, kategori_perusahaan, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, id_perusahaan], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(id_perusahaan, res)
      }
  });
};


exports.DeleteDataPerusahaan = function(req, res, params) {
    
  var id_perusahaan = req.params.id_perusahaan;

  connection.query('DELETE FROM data_perusahaan WHERE id_perusahaan = ?',
  [ id_perusahaan ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil Menghapus Data Perusahaan!", res)
      }
  });
};

//Api Get Utama
exports.DataPerusahaanUtama = function (req, res) {
    connection.query('SELECT nama_perusahaan, telp_perusahaan, alamat_perusahaan, nama_pic FROM data_perusahaan ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };



  //PENAWARAN
  exports.DataPenawaran = function (req, res) {
    connection.query(' SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai)', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)

          }
      });
  };

  exports.InsertDataPenawaran = function (req, res) {
    var id_perusahaan = req.body.id_perusahaan;
    var tgl_telp = req.body.tgl_telp;
    var ket_telepon = req.body.ket_telepon;
    var status_telp = req.body.status_telp;
    var tgl_fu = req.body.tgl_fu;
    var keterangan_fu = req.body.keterangan_fu;
    var produk_penawaran = req.body.produk_penawaran;
    var bandwidth_penawaran = req.body.bandwidth_penawaran;
    var lastmile_penawaran = req.body.lastmile_penawaran;
    var mtc = req.body.mtc;
    var follow_up = req.body.follow_up;
    var status_fu = req.body.status_fu;
    var soft_survey = req.body.soft_survey;
    var hasil_survey = req.body.hasil_survey;
    var FAB = req.body.FAB;
    var id_pegawai = req.body.id_pegawai;
    connection.query('INSERT INTO transaksi_penawaran (id_perusahaan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ',
    [id_perusahaan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai], (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows.insertId, res)

          }
      });
  };

  exports.UpdateDataTransaksi = function(req, res, params) {
    var id_trans_penawaran = req.params.id_trans_penawaran;
    var id_perusahaan = req.body.id_perusahaan;
    var tgl_telp = req.body.tgl_telp;
    var ket_telepon = req.body.ket_telepon;
    var status_telp = req.body.status_telp;
    var tgl_fu = req.body.tgl_fu;
    var keterangan_fu = req.body.keterangan_fu;
    var produk_penawaran = req.body.produk_penawaran;
    var bandwidth_penawaran = req.body.bandwidth_penawaran;
    var lastmile_penawaran = req.body.lastmile_penawaran;
    var mtc = req.body.mtc;
    var follow_up = req.body.follow_up;
    var status_fu = req.body.status_fu;
    var soft_survey = req.body.soft_survey;
    var hasil_survey = req.body.hasil_survey;
    var FAB = req.body.FAB;
    var id_pegawai = req.body.id_pegawai;
  
    connection.query('UPDATE transaksi_penawaran SET id_trans_penawaran=?, id_perusahaan=?, tgl_telp=?, ket_telepon=?, status_telp=?, tgl_fu=?, keterangan_fu=?, produk_penawaran=?, bandwidth_penawaran=?, lastmile_penawaran=?, mtc=?, follow_up=?, status_fu=?, soft_survey=?, hasil_survey=?, FAB=?, id_pegawai=? WHERE id_trans_penawaran = ?',
    [ id_trans_penawaran, id_perusahaan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, id_trans_penawaran], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_trans_penawaran, res)
        }
    });
  };


  exports.DeleteDataPenawaran = function(req, res) {
    
    var id_trans_penawaran = req.params.id_trans_penawaran;

    connection.query('DELETE FROM transaksi_penawaran WHERE id_trans_penawaran =  ?',
    [ id_trans_penawaran ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Penawaran!", res)
        }
    });
};

    //Api get Transaksi Utama
    exports.DataPenawaranUtama = function (req, res) {
        connection.query(' SELECT nama_perusahaan, telp_perusahaan, alamat_perusahaan, nama_pic, status_telp, status_fu FROM data_perusahaan INNER JOIN transaksi_penawaran using(id_perusahaan)', (error, rows, fields) => {
              if(error){
                  console.log(error)
              } else{
                  response.ok(rows, res)
    
              }
          });
      };

//PEGAWAI
exports.DataPegawai = function (req, res) {
  connection.query('SELECT * FROM pegawai', (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.InsertDataPegawai = function(req, res) {
    
  var nama_pegawai = req.body.nama_pegawai;
  var telp_pegawai = req.body.telp_pegawai;
  var jabatan_peg =  req.body.jabatan_peg;
  var email_peg = req.body.email_peg;
  var username = req.body.username;

  connection.query('INSERT INTO pegawai (nama_pegawai, jabatan_peg, telp_pegawai, email_peg, username) values (?,?.?,?,?)',
  [ nama_pegawai, jabatan_peg, telp_pegawai, email_peg, username ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(rows.insertId, res)
      }
  });
};

exports.UpdateDataPegawai = function(req, res, params) {
    
  var nama_pegawai = req.body.nama_pegawai;
  var telp_pegawai = req.body.telp_pegawai;
  var id_pegawai = req.params.id_pegawai;
  var jabatan_peg =  req.body.jabatan_peg;
  var email_peg = req.body.email_peg;
  var username = req.body.username;

  connection.query('UPDATE pegawai SET nama_pegawai = ?,jabatan_peg = ?, telp_pegawai = ?, email_peg =? WHERE id_pegawai = ?',
  [ nama_pegawai,jabatan_peg, telp_pegawai, email_peg, id_pegawai ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(id_pegawai, res)
      }
  });
};


exports.DeleteDataPegawai = function(req, res) {
    
  var id_pegawai = req.params.id_pegawai;

  connection.query('DELETE FROM pegawai WHERE id_pegawai = ?',
  [ id_pegawai ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil Menghapus Data Pegawai!", res)
      }
  });
};


//WILAYAH
exports.DataWilayah = function (req, res) {
  connection.query('SELECT id_kel, nama_kelurahan, id_kec, nama_kecamatan, id_kab, nama_kabupaten, id_prov, nama_provinsi FROM kelurahan INNER JOIN kecamatan USING(id_kec) INNER JOIN kabupaten USING(id_kab) INNER JOIN provinsi USING(id_prov)', (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};




//Kelurahan
exports.DataWilayahKelurahan = function (req, res) {
  connection.query('SELECT id_kel, id_kec, nama_kelurahan FROM kelurahan', (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.UpdateDataKelurahan = function(req, res) {
    
  var id_kel = req.params.id_kel;
  var nama_kelurahan = req.body.nama_kelurahan;
  var id_kec = req.body.id_kec;
  var id_jenis = req.body.id_jenis;

  connection.query('UPDATE kelurahan SET  id_kec= ?, nama_kelurahan = ?, id_jenis = ? WHERE id_kel = ?',
  [ id_kec, nama_kelurahan,  id_jenis, id_kel ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok(id_kel, res)
      }
  });
};

exports.InsertDataKelurahan = function(req, res) {
    
    var id_kel = req.body.id_kel;
    var id_kec = req.body.id_kec;
    var nama_kelurahan = req.body.nama_kelurahan;
    var id_jenis = req.body.id_jenis
  
    connection.query('INSERT INTO kelurahan (id_kel, id_kec, nama_kelurahan, id_jenis) values (?,?,?,?)',
    [ id_kel, id_kec, nama_kelurahan, id_jenis ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kel, res)
        }
    });
  };

  exports.DeleteDataKelurahan = function(req, res) {
    
    var id_kel = req.params.id_kel;
  
    connection.query('DELETE FROM kelurahan WHERE id_kel = ?',
    [ id_kel ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Kelurahan!", res)
        }
    });
  };

  //Kecamatan
  exports.DataWilayahKecamatan = function (req, res) {
    connection.query('SELECT id_kec, nama_kecamatan FROM kecamatan', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.InsertDataKecamatan = function(req, res) {
    
    var id_kab = req.body.id_kab;
    var id_kec = req.body.id_kec;
    var nama_kecamatan = req.body.nama_kecamatan;
    // var id_jenis = req.body.id_jenis;
  
    connection.query('INSERT INTO kecamatan ( id_kec, id_kab, nama_kecamatan) values (?,?,?)',
    [ id_kec, id_kab, nama_kecamatan ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kec, res)
        }
    });
  };

  exports.UpdateDataKecamatan = function(req, res, params) {
    
    var id_kab = req.body.id_kab;
    var nama_kecamatan = req.body.nama_kecamatan;
    var id_kec = req.params.id_kec;
    // var id_jenis = req.body.id_jenis;
  
    connection.query('UPDATE kecamatan SET id_kab= ?, nama_kecamatan = ? WHERE id_kec = ?',
    [ id_kab, nama_kecamatan, id_kec ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kec, res)
        }
    });
  };

  exports.DeleteDataKecamatan = function(req, res) {
    
    var id_kec = req.params.id_kec;
  
    connection.query('DELETE FROM kecamatan WHERE id_kec = ?',
    [ id_kec ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Kelurahan!", res)
        }
    });
  };
  

  //Kabupaten
  exports.DataWilayahKabupaten = function (req, res) {
    connection.query('SELECT id_kab, nama_kabupaten, id_prov FROM kabupaten', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.InsertDataKabupaten = function(req, res) {
    
    var id_kab = req.body.id_kab;
    var id_prov = req.body.id_prov;
    var nama_kabupaten = req.body.nama_kabupaten;
    var id_jenis = req.body.id_jenis;
  
    connection.query('INSERT INTO kabupaten (id_kab, id_prov, nama_kabupaten, id_jenis ) values (?,?,?,?)',
    [ id_kab, id_prov, nama_kabupaten, id_jenis],   
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kab, res)
        }
    });
  };

  exports.UpdateDataKabupaten = function(req, res, params) {
    
    var id_kab = req.params.id_kab;
    var id_prov = req.body.id_prov;
    var nama_kabupaten = req.body.nama_kabupaten;
    var id_jenis = req.body.id_jenis;
  
    connection.query('UPDATE kabupaten SET id_prov =?, nama_kabupaten = ?, id_jenis = ?  WHERE id_kab = ?',
    [  id_prov, nama_kabupaten, id_jenis, id_kab, ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kab, res)
        }
    });
  };

  exports.DeleteDataKabupaten = function(req, res) {
    
    var id_kab = req.params.id_kab;
  
    connection.query('DELETE FROM kabupaten WHERE id_kab = ?',
    [ id_kab ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Kelurahan!", res)
        }
    });
  };

  //PROVINSI
  exports.DataWilayahProvinsi = function (req, res) {
    connection.query('SELECT * FROM provinsi', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.InsertDataProvinsi = function(req, res) {
    
    var id_prov = req.body.id_prov;
    var nama_provinsi = req.body.nama_provinsi;
  
    connection.query('INSERT INTO provinsi ( id_prov, nama_provinsi ) values (?,?)',
    [ id_prov, nama_provinsi],   
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_prov, res)
        }
    });
  };

  exports.UpdateDataProvinsi = function(req, res) {
    
    var id_prov = req.params.id_prov;
    var nama_provinsi = req.body.nama_provinsi;
  
    connection.query('UPDATE provinsi SET nama_provinsi = ? WHERE id_prov = ?',
    [ nama_provinsi, id_prov], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_prov, res)
        }
    });
  };

  exports.DeleteDataProvinsi = function(req, res) {
    
    var id_prov = req.paramsg.id_prov;
  
    connection.query('DELETE FROM provinsi WHERE id_prov = ?',
    [ id_prov ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Kelurahan!", res)
        }
    });
  };


  
  //LAPORAN
//   exports.DataLaporanBelumDihubungi = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, soft_survey, hasil_survey, FAB FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) WHERE ket_telepon = "" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{                    
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.DataLaporanBulan  = function (req, res) {
//     var tgl_telp = req.params.tgl_telp;
//   connection.query('SELECT * FROM transaksi_penawaran WHERE tgl_telp like "%"?"%" ',[tgl_telp], (error, rows, fields) => {
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//         }
//     });
// };

//SEARCH
  //Search Perusahaan 
  exports.SearchNamaPerusahaan = function (req, res) {
      var nama_perusahaan = req.body.nama_perusahaan;
    //   var namaper = "%"+ req.body.nama_perusahaan + "%";
    connection.query('SELECT * FROM data_perusahaan WHERE nama_perusahaan LIKE "%"?"%" ',[nama_perusahaan], (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{                    
              response.ok(rows, res)
          }
      });
  };

  exports.SearchNamaPegawai = function (req, res) {
    var nama_pegawai = req.body.nama_pegawai;
  connection.query('SELECT * FROM data_pegawai WHERE nama_pegawai LIKE "%"?"%" ',[nama_pegawai], (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{                    
            response.ok(rows, res)
        }
    });
};  

//Laporan
exports.DataBelumDihubungi = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Belum Dihubungi" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataTidakDiangkat = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Tidak Diangkat"  ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataDitolak = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Ditolak" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataPending = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Pending" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataTidakTertarik = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Tidak Tertarik" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataTertarikKontrak = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Tertarik-Menghabiskan Kontrak" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataTertarik = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_telp = "Tertarik" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataKirimEmail = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_fu = "Kirim Email" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataKirimEmailTanggapan = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_fu = "Kirim Email-Tanggapan" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataNegosiasi = function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_fu = "Negosiasi" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.DataSurvey= function (req, res) {
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE status_fu = "Survey" ', (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

//   exports.DataBulanan = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE month(tgl_telp) = ? ', [tgl_telp], (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.DataTahunan = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE year(tgl_telp) = ? ', [tgl_telp], (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };


  //COUNT
  exports.JumlahBelum = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Belum Dihubungi" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahTidakDiangkat = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Tidak Diangkat" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahDitolak = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Ditolak" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahPending = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Pending" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahTidakTertarik = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Tidak Tertarik" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahTertarikMenghabiskan = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Tertarik-Menghabiskan Kontrak" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahTertarik = function (req, res) {
    connection.query('SELECT COUNT(*) status_telp FROM transaksi_penawaran WHERE status_telp = "Tertarik" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahKirimEmail = function (req, res) {
    connection.query('SELECT COUNT(*) status_fu FROM transaksi_penawaran WHERE status_fu = "Kirim Email" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahKirimEmailTanggapan = function (req, res) {
    connection.query('SELECT COUNT(*) status_fu FROM transaksi_penawaran WHERE status_fu = "Kirim Email-Tanggapan" AND tgl_telp ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };

  exports.JumlahNegosiasi = function (req, res) {
    connection.query('SELECT COUNT(*) status_fu FROM transaksi_penawaran WHERE status_fu = "Negosiasi" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };
  exports.JumlahSurvey = function (req, res) {
    connection.query('SELECT COUNT(*) status_fu FROM transaksi_penawaran WHERE status_fu = "Survey" ',  (error, rows, fields) => {
          if(error){
              console.log(error)
          } else{
              response.ok(rows, res)
          }
      });
  };



//NOTIFICATION
// exports.NotifDataBelumDihubungi = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%belum dihubungi%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataTidakDiangkat = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%dihubungi-tidak diangkat%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataDitolak = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%dihubungi-ditolak%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataPending = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%dihubungi-pending%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataTidakTertarik = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%tidak tertarik%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataTertarikKontrak = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%tertarik-menghabiskan kontrak%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataFollowUp = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_telp LIKE "%follow up%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataKirimEmail = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_fu LIKE "%kirim email%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataKirimEmailTanggapan = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_fu LIKE "%kirim email-tanggapan%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataNegosiasi = function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_fu LIKE "%negosiasi%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

//   exports.NotifDataSurvey= function (req, res) {
//     connection.query('SELECT id_trans_penawaran, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) INNER JOIN data_perusahaan using(id_kab) INNER JOIN transaksi_penawaran using(id_perusahaan) INNER JOIN pegawai using(id_pegawai) WHERE status_fu LIKE "%survey%" ', (error, rows, fields) => {
//           if(error){
//               console.log(error)
//           } else{
//               response.ok(rows, res)
//           }
//       });
//   };

// exports.InsertDataWilayah = function(req, res) {
    
//   var id_kel = req.body.id_kel;
//   var nama_kelurahan = req.body.nama_kelurahan;
//   var id_kec = req.body.id_kec;
//   var nama_kecamatan = req.body.nama_kecamatan;
//   var id_kab = req.body.id_kab;
//   var nama_kabupaten = req.body.nama_kabupaten;
//   var id_prov = req.body.id_prov;
//   var nama_provinsi = req.body.nama_provinsi;

//   connection.query('INSERT INTO pegawai (id_kel, nama_kelurahan) values (?,?)',
//   [ id_kel, nama_kelurahan ], 
//   function (error, rows, fields){
//       if(error){
//           console.log(error)
//       } else{
//           response.ok("Berhasil menambahkan user!", res)
//       }
//   });
// };  BELUM SELESAI SEK BINGUNG

// exports.DeleteDataWilayah = function(req, res) {
    
//   var id_pegawai = req.body.id_pegawai;

//   connection.query('DELETE FROM pegawai WHERE id_pegawai = ?',
//   [ id_pegawai ], 
//   function (error, rows, fields){
//       if(error){
//           console.log(error)
//       } else{
//           response.ok("Berhasil menghapus user!", res)
//       }
//   });
// }; BELUM SELESAI SEK BINGUNG  
exports.InsertDataKota = function (req, res, next) {
    //     var nama_kota = req.body.nama_kota;
    //     const kota = await connection.query('INSERT INTO kota (nama_kota ) values (?)',
    //     [ nama_kota]);  
    //   if (kota) {
    //     res.status({
    //       'status': 'OK',
    //       'messages': 'User berhasil ditambahkan',
    //       'data': kota
    //     });
    //     console.log(kota);
    //   } else{
    //    res.status({
    //      'status': 'ERROR',
    //      'messages': err.message,
    //      'data': {}
    //    })
    //  };
    


        
        var nama_kota = req.body.nama_kota;

    connection.query('INSERT INTO kota(nama_kota ) values (?)',
    [ nama_kota],   
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(  rows.insertId, res)
        }
    });
  };
  exports.UpdateDataKota = function(req, res) {
    
    var id_kota = req.params.id_kota;
    var nama_kota = req.body.nama_kota;
  
    connection.query('UPDATE kota SET nama_kota = ? WHERE id_kota = ?',
    [ nama_kota, id_kota ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(id_kota, res)
        }
    });
  };
  exports.DeleteDataKota = function(req, res, params) {
    
    var id_kota = req.params.id_kota;
  
    connection.query('DELETE FROM kota WHERE id_kota = ?',
    [ id_kota ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil Menghapus Data Kelurahan!", res)
        }
    });
  };




  exports.APICOUNT = function(req, res, params) {
    
    var tgl_telp = req.params.tgl_telp;
    var status_telp = req.params.status_telp;
    var status_fu = req.params.status_fu;
  
    connection.query('SELECT tgl_telp, status_telp, status_fu, COUNT(status_telp) FROM  transaksi_penawaran GROUP BY status_telp, status_fu ORDER BY status_telp ', 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
  };

  exports.APICOUNTSTATUSBULAN = function(req, res, params) {
    
    var tgl_telp = req.params.tgl_telp;
    var tgl_telp2 = req.params.tgl_telp2;
  
    connection.query('SELECT tgl_telp, status_telp, status_fu, COUNT(status_telp) FROM  transaksi_penawaran WHERE year(tgl_telp) = ? AND month(tgl_telp) = ? GROUP BY status_telp, status_fu ORDER BY status_telp',
    [ tgl_telp, tgl_telp2 ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
  };

  exports.APISTATUSTELPBULAN = function(req, res, params) {
    
    var tgl_telp = req.params.tgl_telp;
    var tgl_telp2 = req.params.tgl_telp2;
  
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE year(tgl_telp) = ? AND month(tgl_telp) = ? AND status_telp = ?',
    [ tgl_telp, tgl_telp2, status_telp], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
  };

  exports.APISTATUSFUBULAN = function(req, res, params) {
    
    var tgl_telp = req.params.tgl_telp;
    var tgl_telp2 = req.params.tgl_telp2;
    var status_fu = req.params.status_fu;
  
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE month(tgl_telp) = ? AND year(tgl_telp) = ? AND status_fu = ? ',
    [ tgl_telp, tgl_telp2, status_fu], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
  };

  exports.APISTATUSBULAN = function(req, res, params) {
    
    var tgl_telp = req.params.tgl_telp;
    var tgl_telp2 = req.params.tgl_telp2;
    let status_telp = req.params.status_telp;
    let status_fu = req.params.status_fu;
  
    connection.query('SELECT id_trans_penawaran, id_perusahaan, nama_perusahaan, telp_perusahaan, kategori_perusahaan, alamat_perusahaan, nama_kabupaten, nama_provinsi, nama_pic, email_pic, telp_pic, jabatan_pic, isp, jasa_produk, bandwidth, lastmile, tarif_bulan, periode_kontrak, keterangan, tgl_telp, ket_telepon, status_telp, tgl_fu, keterangan_fu, produk_penawaran, bandwidth_penawaran, lastmile_penawaran, mtc, follow_up, status_fu, soft_survey, hasil_survey, FAB, id_pegawai, nama_pegawai, telp_pegawai FROM provinsi INNER JOIN kabupaten using(id_prov) RIGHT JOIN data_perusahaan using(id_kab) RIGHT JOIN transaksi_penawaran using(id_perusahaan) LEFT JOIN pegawai using(id_pegawai) WHERE year(tgl_telp)=? AND month(tgl_telp)=? AND status_telp =? AND status_fu = ?  ' ,
    [ tgl_telp, tgl_telp2, status_telp, status_fu], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
            console.log(rows)
        }
    });
  };

//   exports.APICOBABULAN = function(req, res, params) {
    
//     var tgl_telp = req.params.tgl_telp;
//     var tgl2 = req.params.tgl2;
  
//     connection.query(' SELECT * FROM transaksi_penawaran WHERE year(tgl_telp) = ? AND month(tgl_telp) = ?' ,[tgl2, tgl_telp],
//     function (error, rows, fields){
//         if(error){
//             console.log(error)
//         } else{
//             response.ok(rows, res)
//             console.log(tgl_telp)
//             console.log(tgl2)
//         }
//     });
//   };