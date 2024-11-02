!function(){"use strict";class e{constructor(e,t,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._handleImageClick=s}_setEventListeners(){this._likeButton.addEventListener("click",(()=>{this._likeButton.classList.toggle("card__like-button_active")})),this._deleteButton.addEventListener("click",(()=>{this._cardElement.remove()})),this._cardImageElement.addEventListener("click",(()=>{this._handleImageClick({name:this._name,link:this._link})}))}getCard(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._deleteButton=this._cardElement.querySelector(".card__delete-button"),this._cardImageElement=this._cardElement.querySelector(".card__image"),this._cardElement.querySelector(".card__title").textContent=this._name,this._cardImageElement.src=this._link,this._cardImageElement.alt=this._name,this._setEventListeners(),this._cardElement}}class t{constructor(e,t){this._inputSelector=e.inputSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=t,this._submitButtonSelector=e.submitButtonSelector,this._inputElements=Array.from(this._form.querySelectorAll(this._inputSelector)),this._submitButton=this._form.querySelector(this._submitButtonSelector)}_showInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}_hideInputError(e){const t=this._form.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}_checkInputValidity(e){if(!e.validity.valid)return this._showInputError(e);this._hideInputError(e)}_hasInvalidInputs(){return!this._inputElements.every((e=>e.validity.valid))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}toggleButtonState(){this._hasInvalidInputs()?this.disableButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1)}resetValidation(){this.toggleButtonState(),this._inputList.forEach((e=>{this._hideInputError(e)}))}_setEventListeners(){this._inputElements.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this.toggleButtonState()}))}))}enableValidation(){this._setEventListeners()}}class s{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this._handleEscClose)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this._handleEscClose)}_handleEscClose(e){"Escape"!==e.key&&"Esc"!==e.key||this.close()}setEventListeners(){this._popupElement.addEventListener("click",(e=>{(e.target.classList.contains("modal_opened")||e.target.classList.contains("modal__close"))&&this.close()}))}}class o extends s{constructor(e,t){super({popupSelector:e}),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=t,this._inputList=this._popupForm.querySelectorAll(".modal__input")}_getInputValues(){return this._inputData={},this._inputList.forEach((e=>{this._inputData[e.name]=e.value})),this._inputData}setInputValues(e){this._inputList.forEach((t=>{t.value=e[t.name]}))}getForm(){return this._popupForm}setEventListeners(){super.setEventListeners(),this._popupForm.addEventListener("submit",(e=>{e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this._popupForm.reset()}))}}document.querySelector(".profile__title"),document.querySelector(".profile__subtitle");const i=document.querySelector("#profile-title-input"),r=document.querySelector("#profile-subtitle-input"),n=document.querySelector(".profile__edit-button"),l=document.querySelector("#edit-modal"),a=document.querySelector("#modal-form-profile"),c=(l.querySelector("#edit-modal-close"),document.querySelector("#profile-submit"),document.querySelector("#add-modal")),u=document.querySelector("#modal-form-card"),d=document.querySelector(".profile__add-button"),m=(c.querySelector("#add-modal-close"),document.querySelector("#submit-button"),document.querySelector(".cards__list"),document.querySelector("#preview-modal").querySelector("#popup-modal-close"),{inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"});function p(e){b.open(e)}function _(t){const s=function(t){return new e(t,"#card-template",p).getCard()}(t);f.addItem(s)}const h=new t(m,a),E=new t(m,u);h.enableValidation(),E.enableValidation();const f=new class{constructor(e,t){let{items:s,renderer:o}=e;this._items=s,this._renderer=o,this._container=document.querySelector(t)}renderItems(){this._items.forEach((e=>{this._renderer(e)}))}addItem(e){this._container.prepend(e)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:_},".cards__list");f.renderItems();const v=new class{constructor(e){let{profileName:t,profileJob:s}=e;this._profileName=document.querySelector(t),this._profileJob=document.querySelector(s)}getUserInfo(){return{profileName:this._profileName.textContent,profileJob:this._profileJob.textContent}}setUserInfo(e){let{profileName:t,profileJob:s}=e;this._profileName.textContent=t,this._profileJob.textContent=s}}({profileName:".profile__title",profileJob:".profile__subtitle"}),S=new o("#edit-modal",(function(e){const t=e.title,s=e.subtitle;v.setUserInfo({profileName:t,profileJob:s}),S.close()}));S.setEventListeners();const y=new o("#add-modal",(function(e){_({name:e.title,link:e.url}),y.close(),E.disableButton()}));y.setEventListeners();const b=new class extends s{constructor(e){let{popupSelector:t}=e;super({popupSelector:t}),this._previewImage=this._popupElement.querySelector(".modal__image"),this._previewTitle=this._popupElement.querySelector(".modal__title")}open(e){this._previewImage.src=e.link,this._previewImage.alt=e.name,this._previewTitle.textContent=e.name,super.open()}close(){super.close(),setTimeout((()=>{this._previewImage.src="",this._previewImage.alt="",this._previewTitle.textContent=""}),500)}}({popupSelector:"#preview-modal"});b.setEventListeners(),d.addEventListener("click",(()=>{y.open()})),n.addEventListener("click",(()=>{const e=v.getUserInfo();i.value=e.profileName,r.value=e.profileJob,S.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBS3RGLEtBQzlCRixLQUFLc0ksY0FBY2pILFlBQWNtRSxFQUFLdEYsS0FFdEM4RSxNQUFNVixNQUNSLENBRUFDLEtBQUFBLEdBQ0VTLE1BQU1ULFFBQ05nRSxZQUFXLEtBQ1R2SSxLQUFLcUksY0FBYy9HLElBQU0sR0FDekJ0QixLQUFLcUksY0FBYzlHLElBQU0sR0FDekJ2QixLQUFLc0ksY0FBY2pILFlBQWMsRUFBRSxHQUNsQyxJQUNMLEdIbURvQyxDQUFFNkMsY0FBZSxtQkFDdkRtQyxFQUFXMUIsb0JBRVhpQyxFQUFBQSxpQkFBeUMsU0FBUyxLQUNoRHVCLEVBQVU3RCxNQUFNLElBRWxCc0MsRUFBQUEsaUJBQTZDLFNBQVMsS0FDcEQsTUFBTW9CLEVBQWFULEVBQWdCSyxjQUNuQ2hCLEVBQUFBLE1BQW9Db0IsRUFBV1IsWUFDL0NaLEVBQUFBLE1BQXVDb0IsRUFBV1AsV0FDbERNLEVBQWF6RCxNQUFNLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGNhcmREYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spIHtcclxuICAgIHRoaXMuX25hbWUgPSBjYXJkRGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fY2FyZEltYWdlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHsgbmFtZTogdGhpcy5fbmFtZSwgbGluazogdGhpcy5fbGluayB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxyXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpO1xyXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiXHJcbiAgICApO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlRWxlbWVudCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsZW1lbnQuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXHJcbiAgICApO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG5cclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsZW1lbnQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxyXG4gICAgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9XHJcblxyXG4gIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50cykge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnRzLnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnRzKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudHMpO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dHMoKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuX2lucHV0RWxlbWVudHMuZXZlcnkoXHJcbiAgICAgIChpbnB1dEVsZW1lbnRzKSA9PiBpbnB1dEVsZW1lbnRzLnZhbGlkaXR5LnZhbGlkXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dHMoKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGVuYWJsZVZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBvcGVuKCkge1xyXG4gICAgLy9vcGVucyBwb3B1cFxyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIC8vY2xvc2VzIHBvcHVwXHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiIHx8IGV2dC5rZXkgPT09IFwiRXNjXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvL2V2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX29wZW5lZFwiKSB8fFxyXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxfX2Nsb3NlXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXBGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxfX2lucHV0XCIpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgLy9jb2xsZWN0cyBkYXRhIGZyb20gYWxsIGlucHV0IGZpZWxkcyBhbmQgcmV0dXJucyBhcyBhbiBvYmplY3RcclxuXHJcbiAgICB0aGlzLl9pbnB1dERhdGEgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICB0aGlzLl9pbnB1dERhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RGF0YTtcclxuICB9XHJcbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3B1cEZvcm07XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgICB0aGlzLl9wb3B1cEZvcm0ucmVzZXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxha2UgTG91aXNlXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhZ28uanBnXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVN1YnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19zdWJ0aXRsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXRpdGxlLWlucHV0XCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZVN1YnRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiI3Byb2ZpbGUtc3VidGl0bGUtaW5wdXRcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVFZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbW9kYWxcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsLWZvcm0tcHJvZmlsZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVNb2RhbEJ1dHRvbiA9XHJcbiAgcHJvZmlsZUVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtbW9kYWwtY2xvc2VcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLXN1Ym1pdFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkQWRkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1tb2RhbFwiKTtcclxuZXhwb3J0IGNvbnN0IGNhcmRGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9kYWwtZm9ybS1jYXJkXCIpO1xyXG5leHBvcnQgY29uc3QgY2FyZEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGNhcmRNb2RhbEJ1dHRvbiA9IGNhcmRBZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1tb2RhbC1jbG9zZVwiKTtcclxuZXhwb3J0IGNvbnN0IGNhcmRTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saXN0XCIpO1xyXG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aWV3LW1vZGFsXCIpO1xyXG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsQ2xvc2VCdXR0b24gPVxyXG4gIHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLW1vZGFsLWNsb3NlXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRpb25TZXR0aW5ncyA9IHtcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5tb2RhbF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIubW9kYWxfX2J1dHRvblwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX2J1dHRvbl9kaXNhYmxlZFwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJtb2RhbF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwibW9kYWxfX2Vycm9yX3Zpc2libGVcIixcclxufTtcclxuIiwiaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XHJcbmltcG9ydCBcIi4uL3BhZ2VzL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xyXG5pbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW1hZ2VDbGljayhkYXRhKSB7XHJcbiAgLy9vcGVuTW9kYWwocHJldmlld01vZGFsKTtcclxuICAvLyBwcmV2aWV3SW1hZ2Uuc3JjID0gZGF0YS5saW5rO1xyXG4gIC8vIHByZXZpZXdJbWFnZS5hbHQgPSBkYXRhLm5hbWU7XHJcbiAgLy8gcHJldmlld1RpdGxlLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gIHBvcHVwSW1hZ2Uub3BlbihkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZChkYXRhKSB7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChkYXRhKTtcclxuICBjYXJkQ3JlYXRvci5hZGRJdGVtKGNhcmRFbGVtZW50KTtcclxufVxyXG5mdW5jdGlvbiBnZXRDYXJkRWxlbWVudChkYXRhKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGRhdGEsIFwiI2NhcmQtdGVtcGxhdGVcIiwgaGFuZGxlSW1hZ2VDbGljayk7XHJcbiAgcmV0dXJuIGNhcmQuZ2V0Q2FyZCgpO1xyXG59XHJcblxyXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIGNvbnN0YW50cy52YWxpZGF0aW9uU2V0dGluZ3MsXHJcbiAgY29uc3RhbnRzLnByb2ZpbGVGb3JtRWxlbWVudFxyXG4pO1xyXG5jb25zdCBjYXJkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKFxyXG4gIGNvbnN0YW50cy52YWxpZGF0aW9uU2V0dGluZ3MsXHJcbiAgY29uc3RhbnRzLmNhcmRGb3JtRWxlbWVudFxyXG4pO1xyXG5cclxuZWRpdEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5jYXJkRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcblxyXG5jb25zdCBjYXJkQ3JlYXRvciA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBjb25zdGFudHMuaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IGNyZWF0ZUNhcmQsXHJcbiAgfSxcclxuICBcIi5jYXJkc19fbGlzdFwiXHJcbik7XHJcblxyXG5jYXJkQ3JlYXRvci5yZW5kZXJJdGVtcygpO1xyXG5cclxuY29uc3QgdXNlclByb2ZpbGVJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlTmFtZTogXCIucHJvZmlsZV9fdGl0bGVcIixcclxuICBwcm9maWxlSm9iOiBcIi5wcm9maWxlX19zdWJ0aXRsZVwiLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2ZpbGVTdWJtaXQoZm9ybVZhbHVlcykge1xyXG4gIGNvbnN0IHByb2ZpbGVOYW1lID0gZm9ybVZhbHVlcy50aXRsZTtcclxuICBjb25zdCBwcm9maWxlSm9iID0gZm9ybVZhbHVlcy5zdWJ0aXRsZTtcclxuICB1c2VyUHJvZmlsZUluZm8uc2V0VXNlckluZm8oeyBwcm9maWxlTmFtZSwgcHJvZmlsZUpvYiB9KTtcclxuICBwcm9maWxlUG9wdXAuY2xvc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZFN1Ym1pdChmb3JtVmFsdWVzKSB7XHJcbiAgY29uc3QgbmFtZSA9IGZvcm1WYWx1ZXMudGl0bGU7XHJcbiAgY29uc3QgbGluayA9IGZvcm1WYWx1ZXMudXJsO1xyXG4gIGNvbnN0IGRhdGEgPSB7IG5hbWUsIGxpbmsgfTtcclxuXHJcbiAgY3JlYXRlQ2FyZChkYXRhKTtcclxuICBjYXJkUG9wdXAuY2xvc2UoKTtcclxuICBjYXJkRm9ybVZhbGlkYXRvci5kaXNhYmxlQnV0dG9uKCk7XHJcbn1cclxuY29uc3QgcHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXCIjZWRpdC1tb2RhbFwiLCBoYW5kbGVQcm9maWxlU3VibWl0KTtcclxucHJvZmlsZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBjYXJkUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybShcIiNhZGQtbW9kYWxcIiwgaGFuZGxlQWRkQ2FyZFN1Ym1pdCk7XHJcbmNhcmRQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgcG9wdXBJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7IHBvcHVwU2VsZWN0b3I6IFwiI3ByZXZpZXctbW9kYWxcIiB9KTtcclxucG9wdXBJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3RhbnRzLmNhcmRBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjYXJkUG9wdXAub3BlbigpO1xyXG59KTtcclxuY29uc3RhbnRzLnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZm9ybVZhbHVlcyA9IHVzZXJQcm9maWxlSW5mby5nZXRVc2VySW5mbygpO1xyXG4gIGNvbnN0YW50cy5wcm9maWxlVGl0bGVJbnB1dC52YWx1ZSA9IGZvcm1WYWx1ZXMucHJvZmlsZU5hbWU7XHJcbiAgY29uc3RhbnRzLnByb2ZpbGVTdWJ0aXRsZUlucHV0LnZhbHVlID0gZm9ybVZhbHVlcy5wcm9maWxlSm9iO1xyXG4gIHByb2ZpbGVQb3B1cC5vcGVuKCk7XHJcbn0pO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IGl0ZW1zLCByZW5kZXJlciB9LCBjYXJkU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjYXJkU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICAvL3JlbmRlcnMgYWxsIGVsZW1lbnRzIG9uIHRoZSBwYWdlXHJcbiAgICAvL2NhbGwgdGhlIHJlbmRlcmVyKCkgZnVuY3Rpb25cclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XHJcbiAgICAvL3Rha2VzIERPTSBlbGVtZW50IGFuZCBhZGRzIGl0IHRvIHRoZSBjb250YWluZXJcclxuICAgIC8vc2hvdWxkIGJlIGNhbGxlZCB3aGVuIGFkZGluZyBhbiBpbmRpdmlkdWFsIGNhcmQgdG8gdGhlIERPTVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZSwgcHJvZmlsZUpvYiB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZU5hbWUpO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZUpvYik7XHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIC8vcmV0dXJucyB1c2VyIGluZm9ybWF0aW9uXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9maWxlTmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXHJcbiAgICAgIHByb2ZpbGVKb2I6IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oeyBwcm9maWxlTmFtZSwgcHJvZmlsZUpvYiB9KSB7XHJcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IHByb2ZpbGVOYW1lO1xyXG4gICAgdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCA9IHByb2ZpbGVKb2I7XHJcblxyXG4gICAgLy90YWtlcyBuZXcgdXNlciBkYXRhIGFuZCBhZGRzIGl0IHRvIHRoZSBwYWdlXHJcbiAgICAvL21ldGhvZCBzaG91bGQgYmUgdXNlZCBhZnRlciBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2YgdGhlIHByb2ZpbGUgZm9ybVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XHJcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XHJcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XHJcbiAgICB0aGlzLl9wcmV2aWV3VGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fdGl0bGVcIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKGRhdGEpIHtcclxuICAgIHRoaXMuX3ByZXZpZXdJbWFnZS5zcmMgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2UuYWx0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fcHJldmlld1RpdGxlLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG5cclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9wcmV2aWV3SW1hZ2Uuc3JjID0gXCJcIjtcclxuICAgICAgdGhpcy5fcHJldmlld0ltYWdlLmFsdCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuX3ByZXZpZXdUaXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiY2FyZERhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwidGhpcyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9saWtlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9kZWxldGVCdXR0b24iLCJfY2FyZEVsZW1lbnQiLCJyZW1vdmUiLCJfY2FyZEltYWdlRWxlbWVudCIsImdldENhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwidGV4dENvbnRlbnQiLCJzcmMiLCJhbHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybSIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2lucHV0RWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX3N1Ym1pdEJ1dHRvbiIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yRWxlbWVudCIsImlkIiwiYWRkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJlcnJvck1lc3NhZ2VFbGVtZW50IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImlucHV0RWxlbWVudHMiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hhc0ludmFsaWRJbnB1dHMiLCJldmVyeSIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsInRvZ2dsZUJ1dHRvblN0YXRlIiwicmVzZXRWYWxpZGF0aW9uIiwiX2lucHV0TGlzdCIsImZvckVhY2giLCJlbmFibGVWYWxpZGF0aW9uIiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwib3BlbiIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsInNldEV2ZW50TGlzdGVuZXJzIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlRm9ybVN1Ym1pdCIsInN1cGVyIiwiX3BvcHVwRm9ybSIsIl9oYW5kbGVGb3JtU3VibWl0IiwiX2dldElucHV0VmFsdWVzIiwiX2lucHV0RGF0YSIsImlucHV0IiwidmFsdWUiLCJzZXRJbnB1dFZhbHVlcyIsImRhdGEiLCJnZXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsInByb2ZpbGVUaXRsZUlucHV0IiwicHJvZmlsZVN1YnRpdGxlSW5wdXQiLCJwcm9maWxlRWRpdEJ1dHRvbiIsInByb2ZpbGVFZGl0TW9kYWwiLCJwcm9maWxlRm9ybUVsZW1lbnQiLCJjYXJkQWRkTW9kYWwiLCJjYXJkRm9ybUVsZW1lbnQiLCJjYXJkQWRkQnV0dG9uIiwidmFsaWRhdGlvblNldHRpbmdzIiwicG9wdXBJbWFnZSIsImNyZWF0ZUNhcmQiLCJjYXJkRWxlbWVudCIsImdldENhcmRFbGVtZW50IiwiY2FyZENyZWF0b3IiLCJhZGRJdGVtIiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJjb25zdGFudHMiLCJjYXJkRm9ybVZhbGlkYXRvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJ1c2VyUHJvZmlsZUluZm8iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVKb2IiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZUpvYiIsImdldFVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJfcmVmMiIsInByb2ZpbGVQb3B1cCIsImZvcm1WYWx1ZXMiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY2FyZFBvcHVwIiwidXJsIiwiX3ByZXZpZXdJbWFnZSIsIl9wcmV2aWV3VGl0bGUiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==