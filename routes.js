// 'use strict';

// module.exports = function(app) {
//     var todoList = require('./controller');

//     app.route('/')
//         .get(todoList.index);

//     app.route('/users')
//         .get(todoList.users);
// };

'use strict';



var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// const router = express.Router();

module.exports = function(app) {
    var todoList = require('./controller');
    let connection = require('./conn');

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Content-Type", "application/json");
        res.header( "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS") ;
        next();
      });

      
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    
    app.get('/', function(request, response) {
        response.sendFile(path.join(__dirname + '/'));
    });
    
    app.post('/login', function(request, response) {
        var username = request.body.username;
        var password = request.body.password;
       
            connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.username = username;
                    response.send("Haloo")
                } else {
                    response.send('Incorrect Username and/or Password!');
                }			
                response.end();
            });
        
    });
    
    app.get('/home', function(request, response) {
        if (request.session.loggedin) {
            response.send('Welcome back, ' + request.session.username + '!');
        } else {
            response.send('Please login to view this page!');
        }
        response.end();
    });

    app.get('/logout',(req,res) => {
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            res.redirect('/');
        });
    
    });

    //LOGIN
    // app.route('/login')
    //     .post(todoList.login);

    //PERUSAHAAN
        
    app.route('/getdataperusahaan')
        .get(todoList.DataPerusahaan);

    app.route('/insertdataperusahaan')
        .post(todoList.InsertDataPerusahaan);

    app.route('/updatedataperusahaan/:id_perusahaan')
        .put(todoList.UpdateDataPerusahaan);

    app.route('/deletedataperusahaan/:id_perusahaan')
        .delete(todoList.DeleteDataPerusahaan);//belum dicoba
        //Api Get Utama
        app.route('/getdataperusahaanutama')
        .get(todoList.DataPerusahaanUtama);


    //PENAWARAN
    app.route('/getdatapenawaran')
        .get(todoList.DataPenawaran);
    
    app.route('/insertdatapenawaran')
        .post(todoList.InsertDataPenawaran);//belum dicoba

    app.route('/updatedatapenawaran/:id_trans_penawaran')
        .put(todoList.UpdateDataTransaksi);//belum dicoba
    
    app.route('/deletedatapenawaran/:id_trans_penawaran')
        .delete(todoList.DeleteDataPenawaran);//belum dicoba
        //Api get Transaksi Utama
        app.route('/getdatapenawaranUtama')
        .get(todoList.DataPenawaranUtama);

    //PEGAWAI
    app.route('/getdatapegawai')
        .get(todoList.DataPegawai);

    app.route('/insertdatapegawai')
        .post(todoList.InsertDataPegawai); //belum dicoba

    app.route('/updatedatapegawai/:id_pegawai')
        .put(todoList.UpdateDataPegawai);//belum dicoba

    app.route('/deletedatapegawai/:id_pegawai')
        .delete(todoList.DeleteDataPegawai);//belum dicoba


    //WILAYAH
    app.route('/getdatawilayah')
        .get(todoList.DataWilayah);

        //Kelurahan
        app.route('/getdatakelurahan')
        .get(todoList.DataWilayahKelurahan);//belum dicoba
        
        app.route('/insertdatakelurahan')
        .post(todoList.InsertDataKelurahan);//belum dicoba

        app.route('/updatedatakelurahan/:id_kel')
        .put(todoList.UpdateDataKelurahan);//belum dicoba

        app.route('/deletedatakelurahan/:id_kel')
        .delete(todoList.DeleteDataKelurahan);//belum dicoba

        //Kecamatan
        app.route('/getdatakecamatan')
        .get(todoList.DataWilayahKecamatan);//belum dicoba

        app.route('/insertdatakecamatan')
        .post(todoList.InsertDataKecamatan);//belum dicoba

        app.route('/updatedatakecamatan/:id_kec')
        .put(todoList.UpdateDataKecamatan);//belum dicoba

        app.route('/deletedatakecamatan/:id_kec')
        .delete(todoList.DeleteDataKecamatan);//belum dicoba

        //Kabupaten
        app.route('/getdatakabupaten')
        .get(todoList.DataWilayahKabupaten);//belum dicoba

        app.route('/insertdatakabupaten')
        .post(todoList.InsertDataKabupaten);//belum dicoba

        app.route('/updatedatakabupaten/:id_kab')
        .put(todoList.UpdateDataKabupaten);//belum dicoba

        app.route('/deletedatakabupaten/:id_kab')
        .delete(todoList.DeleteDataKabupaten);//belum dicoba

        //Provinsi
        app.route('/getdataprovinsi')
        .get(todoList.DataWilayahProvinsi);//belum dicoba

        app.route('/insertdataprovinsi')
        .post(todoList.InsertDataProvinsi);//belum dicoba

        app.route('/updatedataprovinsi/:id_prov')
        .put(todoList.UpdateDataProvinsi);//belum dicoba

        app.route('/deletedataprovinsi/:id_prov')
        .delete(todoList.DeleteDataProvinsi);//belum dicoba

        //LAPORAN
        // app.route('/getlaporanblmdihubungi')
        // .get(todoList.DataLaporanBelumDihubungi);

        // app.route('/getlaporanbulanan')
        // .get(todoList.DataLaporanBulan);//belum dicoba

        app.route('/getlaporanbelum')
        .get(todoList.DataBelumDihubungi);//belum dicoba

        app.route('/getlaporantidakdiangkat')
        .get(todoList.DataTidakDiangkat);//belum dicoba

        app.route('/getlaporanditolak')
        .get(todoList.DataDitolak);//belum dicoba

        app.route('/getlaporanpending')
        .get(todoList.DataPending);//belum dicoba

        app.route('/getlaporantidaktertarik')
        .get(todoList.DataTidakTertarik);//belum dicoba

        app.route('/getlaporantertarikkontrak')
        .get(todoList.DataTertarikKontrak);//belum dicoba

        app.route('/getlaporantertarik')
        .get(todoList.DataTertarik);//belum dicoba

        app.route('/getlaporankirimemail')
        .get(todoList.DataKirimEmail);//belum dicoba

        app.route('/getlaporankirimemailtanggapan')
        .get(todoList.DataKirimEmailTanggapan);//belum dicoba

        app.route('/getlaporannegosiasi')
        .get(todoList.DataNegosiasi);//belum dicoba

        app.route('/getlaporansurvey')
        .get(todoList.DataSurvey);//belum dicoba

        //COUNT ROW STATUS
        app.route('/countbelum')
        .get(todoList.JumlahBelum);//belum dicoba

        app.route('/counttidakdiangkat')
        .get(todoList.JumlahTidakDiangkat);//belum dicoba

        app.route('/countditolak')
        .get(todoList.JumlahDitolak);//belum dicoba

        app.route('/countpending')
        .get(todoList.JumlahPending);//belum dicoba

        app.route('/counttidaktertarik')
        .get(todoList.JumlahTidakTertarik);//belum dicoba

        app.route('/counttertarikkontrak')
        .get(todoList.JumlahTertarikMenghabiskan);//belum dicoba

        app.route('/counttertarik')
        .get(todoList.JumlahTertarik);//belum dicoba

        app.route('/countkirimemail')
        .get(todoList.JumlahKirimEmail);//belum dicoba

        app.route('/counttanggapan')
        .get(todoList.JumlahKirimEmailTanggapan);//belum dicoba

        app.route('/countnegosiasi')
        .get(todoList.JumlahNegosiasi);//belum dicoba

        app.route('/countsurvey')
        .get(todoList.JumlahSurvey);//belum dicoba

        //NOTIFICATION


        //SEARCH
            //Search Perusahaan
            app.route('/searchnamaperusahaan')
            .get(todoList.SearchNamaPerusahaan);//belum dicoba


            app.route('/insertkota')
            .post(todoList.InsertDataKota);

            app.route('/upadatekota/:id_kota')
            .put(todoList.UpdateDataKota);

            app.route('/deletekota/:id_kota')
            .delete(todoList.DeleteDataKota);

    //API LAPORAN BARU
    app.route('/apicount')
    .get(todoList.APICOUNT);
    
    app.route('/apicountstatusbulan/:tgl_telp/:tgl_telp2')
    .get(todoList.APICOUNTSTATUSBULAN);

    app.route('/apicountstatustelpbulan/:tgl_telp/:tgl_telp2/:status_telp')
    .get(todoList.APISTATUSTELPBULAN);


    app.route('/apicountstatusfubulan/:tgl_telp/:tgl_telp2/:status_fu')
    .get(todoList.APISTATUSFUBULAN);

    app.route('/apicountstatusbulanall/:tgl_telp/:tgl_telp2/:status_telp/:status_fu')
    .get(todoList.APISTATUSBULAN);

    // app.route('/apicobabulan/:tgl2/:tgl_telp')
    // .get(todoList.APICOBABULAN);
};