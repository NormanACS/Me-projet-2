const alertList = document.querySelectorAll('.alert')
const alerts = [...alertList].map(element => new bootstrap.Alert(element))


var device = "desktop";
function init($) {
  $("#previewDesktopBtn").click(function (e) {
    setLivePreviewFrameSize($(this));
    setActiveResponsiveButton(this);
    e.preventDefault();
  });

  $("#previewLaptopBtn").click(function (e) {
    setLivePreviewFrameSize($(this));
    setActiveResponsiveButton(this);
    e.preventDefault();
  });
  $("#previewTabletBtn").click(function (e) {
    setLivePreviewFrameSize($(this));
    setActiveResponsiveButton(this);
    e.preventDefault();
  });
  $("#previewPhoneHorizontalBtn").click(function (e) {
    setLivePreviewFrameSize($(this));
    setActiveResponsiveButton(this);
    e.preventDefault();
  });
  $("#previewPhoneBtn").click(function (e) {
    setLivePreviewFrameSize($(this));
    setActiveResponsiveButton(this);
    e.preventDefault();
  });

  detectActiveResponsiveButton();
}

