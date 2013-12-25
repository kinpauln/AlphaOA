/*!
 * Ext JS Library 3.0.0
 * Copyright(c) 2006-2009 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/*
 * Simplified Chinese translation
 * By DavidHu
 * 09 April 2007
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">������...</div>';
Ext.Updater.defaults.timeout = 90;
Ext.LoadMask.prototype.msg  = '���ݼ�����,���Ժ�...';
Ext.data.Connection.prototype.timeout  = 60000;
if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} ѡ����";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "�ر�";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "����ֵ�Ƿ�";
}

Date.monthNames = [
   "1��",
   "2��",
   "3��",
   "4��",
   "5��",
   "6��",
   "7��",
   "8��",
   "9��",
   "10��",
   "11��",
   "12��"
];

Date.upMonthNames = [
                   "һ��",
                   "����",
                   "����",
                   "����",
                   "����",
                   "����",
                   "����",
                   "����",
                   "����",
                   "ʮ��",
                   "ʮһ��",
                   "ʮ����"
                ];


Date.dayNames = [
   "��",
   "һ",
   "��",
   "��",
   "��",
   "��",
   "��"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "ȷ��",
      cancel : "ȡ��",
      yes    : "��",
      no     : "��"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "Y-m-d");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "����",
      minText           : "��������С����֮ǰ",
      maxText           : "�������������֮��",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.upMonthNames,
      dayNames          : Date.dayNames,
      nextText          : '���� ',
      prevText          : '���� ',
      monthYearText     : 'ѡ��һ���� ',
      todayTip          : "{0} ",
      format            : "Y-m-d",
      okText            : "ȷ��",
      cancelText        : "ȡ��"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "��",
      afterPageText  : "ҳ  �� {0} ҳ",
      firstText      : "��һҳ",
      prevText       : "ǰһҳ",
      nextText       : "��һҳ",
      lastText       : "���ҳ",
      refreshText    : "ˢ��",
      displayMsg     : "��ʾ {0} - {1}���� {2} ��",
      emptyMsg       : 'û��������Ҫ��ʾ'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "�����������С������ {0}",
      maxLengthText : "�����������󳤶��� {0}",
      blankText     : "��������Ϊ������",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "�����������Сֵ�� {0}",
      maxText : "������������ֵ�� {0}",
      nanText : "{0} ������Ч��ֵ"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "����",
      disabledDatesText : "����",
      minText           : "������������ڱ����� {0} ֮��",
      maxText           : "������������ڱ����� {0} ֮ǰ",
      invalidText       : "{0} ����Ч������ - ������ϸ�ʽ�� {1}",
      format            : "Y-m-d",
      altFormats : "Y-m-d|y-m-d|Y-n-j|y-n-j|Ymd|ymd|Y.m.d|y.m.d|Y.n.j|y.n.j|Y/m/d|y/m/d|Y/n/j|y/n/j"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "����...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : '������������ǵ����ʼ���ַ����ʽ�磺 "user@example.com"',
      urlText      : '�������������URL��ַ����ʽ�磺 "http:/'+'/www.example.com"',
      alphaText    : '��������ֻ�ܰ����ַ���_',
      alphanumText : '��������ֻ�ܰ����ַ�,���ֺ�_'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "����",
      sortDescText : "����",
      lockText     : "����",
      unlockText   : "������",
      columnsText  : "��ʾ��"
   });
}

if(Ext.grid.GroupingView){
	   Ext.apply(Ext.grid.GroupingView.prototype, {
		  groupByText     : "��Ϊ������",
		  showGroupsText  : "����ģʽ"
	   });
}


if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "����",
      valueText  : "ֵ",
      dateFormat : "Y-m-d"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "�϶����ı�ߴ�.",
      collapsibleSplitTip : "�϶����ı�ߴ�. ˫������."
   });
}
if(Ext.data.Store){
	   Ext.apply(Ext.data.Store.prototype, {
		   sortData : function(f, direction){
		   		direction = direction || 'ASC';
		   		var st = this.fields.get(f).sortType;
		   		var fn = function(r1, r2){
		   			var v1 = st(r1.data[f]), v2 = st(r2.data[f]);
		   			if(Ext.isString(v1) && Ext.isString(v2)){
		   				return v1.localeCompare(v2);
		   			}
		   			return v1 > v2 ? 1 : (v1 < v2 ? -1 : 0);
		   		};
		   		this.data.sort(direction, fn);
		   		if(this.snapshot && this.snapshot != this.data){
		   			this.snapshot.sort(direction, fn);
		   		}
	   		}
	   });
}


if(Ext.DateTimePicker){
	   Ext.apply(Ext.DateTimePicker.prototype, {
	      todayText         : "����",
	      minText           : "��������С����֮ǰ",
	      maxText           : "�������������֮��",
	      disabledDaysText  : "",
	      disabledDatesText : "",
	      monthNames        : Date.upMonthNames,
	      dayNames          : Date.dayNames,
	      nextText          : '���� ',
	      prevText          : '���� ',
	      monthYearText     : 'ѡ��һ���� ',
	      todayTip          : "{0} ",
	      format            : "Y-m-d H:i",
	      okText            : "ȷ��",
	      cancelText        : "ȡ��"
	   });
}
if(Ext.form.DateTimeField){
	   Ext.apply(Ext.form.DateTimeField.prototype, {
	      disabledDaysText  : "����",
	      disabledDatesText : "����",
	      minText           : "������������ڱ����� {0} ֮��",
	      maxText           : "������������ڱ����� {0} ֮ǰ",
	      invalidText       : "{0} ����Ч������ - ������ϸ�ʽ�� {1}",
	      format            : "Y-m-d H:i",
	      altFormats : "Y-m-d|y-m-d|Y-n-j|y-n-j|Ymd|ymd|Y.m.d|y.m.d|Y.n.j|y.n.j|Y/m/d|y/m/d|Y/n/j|y/n/j|Y-m-d H:i:s"
	   });
}

if(Ext.form.TimeField){
	Ext.apply(Ext.form.TimeField.prototype, {
	format:'H:i',
	minText : "���������ʱ�������ڻ���ڣ� {0}",
	maxText : "���������ʱ�����С�ڻ���ڣ� {0}",
	invalidText : "{0}������Ч��ʱ��"
});
}
if(Ext.Button){
	Ext.apply(Ext.Button.prototype, {
		tooltipType  :'title'
	});
}