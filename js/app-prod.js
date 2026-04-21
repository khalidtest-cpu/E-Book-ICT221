"use strict";

angular.module('app', []).controller("myCtrl", function ($scope, $sce) {
  $scope.attachment = false;
  $scope.filterByGroup = {};
  $scope.searchText='';
  $scope.content = $sce.trustAsHtml("\n    <div id=\"carouselExampleControls\" style=\"margin: 0 auto\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"img-fluid center-block\"  src=\"img/img1.png\" alt=\"First slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\"  src=\"img/img2.png\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\" src=\"img/img3.png\" alt=\"Third slide\">\n          </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img4.png\" alt=\"Forth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img5.png\" alt=\"Fifth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img6.png\" alt=\"6 slide\">\n        </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    ");

  $scope.reloadPage = function () {
    window.location.reload();
  };

  $scope.Dnl = function (ref) {
    $scope.ref = ref;
  };

  $scope.linkClicked = function (ref) {
    var html = "<iframe src='" + ref + "' width='100%' style='height: -webkit-fill-available;min-height: 500px;'>";
    $scope.content = $sce.trustAsHtml(html);
  };

  $scope.clearSearch = function () {
    var e = document.getElementById("searchText");
  
    e.value = "";
    var $e = angular.element(e);
    $e.triggerHandler('input');
    $scope.searchText='';
  };

  $scope.topics = [{
    title: "الرياضيات في البرمجة",
    sortOrder: 1,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "",
      items: [{
        "item-title": " علاقة الرياضيات بالبرمجة",
        "Vicon": "",
        "Dicon": "file-pdf-o",
          "Durl": "doc/1-1 MathInProgramming.pdf",
        "Vurl": ""
      }, {
        "item-title": "تطبيقات الرياضيات في البرمجة",
        "Vicon": "",
        "Dicon": "file-pdf-o",
          "Durl": "doc/1-2 MathPracProg.pdf",
        "Vurl": ""
          }, {
              "item-title": "المكتبات في لغة بايثون",
              "Vicon": "",
              "Dicon": "file-pdf-o",
          "Durl": "doc/1-3 LibrariesInPython.pdf",
              "Vurl": ""
          }]
    }]
  },{
    title: "البرمجة لحلّ المعادلات الرياضية",
    sortOrder: 2,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "",
      items: [{
        "item-title": "معادلات القيم المطلقة",
        "Vicon": "",
        "Dicon": "file-pdf-o",
          "Durl": "doc/2-1-AbsoluteEq.pdf",
        "Vurl": ""
      },{
              "item-title": "المعادلات التربيعية",
              "Vicon": "",
              "Dicon": "file-pdf-o",
          "Durl": "doc/2-2-SecDegEq.pdf",
              "Vurl": ""
          }, {
              "item-title": "الأنظمة غير الخطية",
              "Vicon": "",
              "Dicon": "file-pdf-o",
          "Durl": "doc/2-3-NonLinearSystem.pdf",
              "Vurl": ""
          }]
    }]
      }, {
          title: "المصفوفات",
          sortOrder: 3,
          icon: "",
          dnload: "",
          dnloadText: "",
          subGroups: [{
              "sub-title": "",
              items: [{
                  "item-title": "مقدمة حول المصفوفات",
                  "Vicon": "",
                  "Dicon": "file-pdf-o",
                  "Durl": "doc/3-1-Matrices.pdf",
                  "Vurl": ""
              }, {
                  "item-title": "العمليات الحسابية على المصفوفات",
                  "Vicon": "",
                  "Dicon": "file-pdf-o",
                  "Durl": "doc/3-2-MathOpOnMatrices.pdf",
                  "Vurl": ""
              }, {
                  "item-title": "المصفوفات - حلّ الأنظمة الخطية",
                  "Vicon": "",
                  "Dicon": "file-pdf-o",
                  "Durl": "doc/3-3-Mtrices-LinearSysSolving.pdf",
                  "Vurl": ""
              }]
          }]
      }, {
          title: "التمثيل البياني",
          sortOrder: 4,
          icon: "",
          dnload: "",
          dnloadText: "",
          subGroups: [{
              "sub-title": "",
              items: [{
                  "item-title": "رسم الدوال بيانيا",
                  "Vicon": "",
                  "Dicon": "file-pdf-o",
                  "Durl": "doc/4-charts.pdf",
                  "Vurl": ""
              }]
          }]
      },{
    title: "التعليمات وملفات العمل",
    sortOrder: 0,
    icon: "book",
    dnload: "doc/dwnld/thonny-4.1.7.rar",
    dnloadText: "Thonny 4.1.7 برمجيّة",
    subGroups: [{
      "sub-title": "تعليمات عامة",
      items: [{
        "item-title": "تعليمات عامة",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/instructions.pdf",
        "Vurl": ""
      },{
        "item-title": "طرق تثبيت مكتبات البايثون",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HowInstallLib.pdf",
        "Vurl": ""
      },{
        "item-title": "أخلاقيات التعامل مع الذكاء الاصطناعي",
        "Vicon": "",
        "Dicon": "file-pdf-o",
          "Durl": "doc/ethics.pdf",
        "Vurl": ""
      }]
    }]
  },{
    title: "كراس أنشطة الكتاب",
    sortOrder: 0,
    icon: "book",
    dnload: "doc/dwnld/Activity-WBook-221.rar",
    dnloadText: "كراس الانشطة",
    subGroups: []
  }];
});