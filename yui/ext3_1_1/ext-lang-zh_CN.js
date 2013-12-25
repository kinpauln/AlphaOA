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

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">加载中...</div>';
Ext.Updater.defaults.timeout = 90;
Ext.LoadMask.prototype.msg  = '数据加载中,请稍候...';
Ext.data.Connection.prototype.timeout  = 60000;
if(Ext.View){
   Ext.View.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "{0} 选择行";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "关闭";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "输入值非法";
}

Date.monthNames = [
   "1月",
   "2月",
   "3月",
   "4月",
   "5月",
   "6月",
   "7月",
   "8月",
   "9月",
   "10月",
   "11月",
   "12月"
];

Date.upMonthNames = [
                   "一月",
                   "二月",
                   "三月",
                   "四月",
                   "五月",
                   "六月",
                   "七月",
                   "八月",
                   "九月",
                   "十月",
                   "十一月",
                   "十二月"
                ];


Date.dayNames = [
   "日",
   "一",
   "二",
   "三",
   "四",
   "五",
   "六"
];

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "确定",
      cancel : "取消",
      yes    : "是",
      no     : "否"
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
      todayText         : "今天",
      minText           : "日期在最小日期之前",
      maxText           : "日期在最大日期之后",
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.upMonthNames,
      dayNames          : Date.dayNames,
      nextText          : '下月 ',
      prevText          : '上月 ',
      monthYearText     : '选择一个月 ',
      todayTip          : "{0} ",
      format            : "Y-m-d",
      okText            : "确定",
      cancelText        : "取消"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "第",
      afterPageText  : "页  共 {0} 页",
      firstText      : "第一页",
      prevText       : "前一页",
      nextText       : "下一页",
      lastText       : "最后页",
      refreshText    : "刷新",
      displayMsg     : "显示 {0} - {1}，共 {2} 条",
      emptyMsg       : '没有数据需要显示'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "该输入项的最小长度是 {0}",
      maxLengthText : "该输入项的最大长度是 {0}",
      blankText     : "该输入项为必输项",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "该输入项的最小值是 {0}",
      maxText : "该输入项的最大值是 {0}",
      nanText : "{0} 不是有效数值"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "禁用",
      disabledDatesText : "禁用",
      minText           : "该输入项的日期必须在 {0} 之后",
      maxText           : "该输入项的日期必须在 {0} 之前",
      invalidText       : "{0} 是无效的日期 - 必须符合格式： {1}",
      format            : "Y-m-d",
      altFormats : "Y-m-d|y-m-d|Y-n-j|y-n-j|Ymd|ymd|Y.m.d|y.m.d|Y.n.j|y.n.j|Y/m/d|y/m/d|Y/n/j|y/n/j"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "加载...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : '该输入项必须是电子邮件地址，格式如： "user@example.com"',
      urlText      : '该输入项必须是URL地址，格式如： "http:/'+'/www.example.com"',
      alphaText    : '该输入项只能包含字符和_',
      alphanumText : '该输入项只能包含字符,数字和_'
   });
}

if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "升序",
      sortDescText : "降序",
      lockText     : "锁列",
      unlockText   : "解锁列",
      columnsText  : "显示列"
   });
}

if(Ext.grid.GroupingView){
	   Ext.apply(Ext.grid.GroupingView.prototype, {
		  groupByText     : "作为分组列",
		  showGroupsText  : "分组模式"
	   });
}


if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "名称",
      valueText  : "值",
      dateFormat : "Y-m-d"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "拖动来改变尺寸.",
      collapsibleSplitTip : "拖动来改变尺寸. 双击隐藏."
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
	      todayText         : "今天",
	      minText           : "日期在最小日期之前",
	      maxText           : "日期在最大日期之后",
	      disabledDaysText  : "",
	      disabledDatesText : "",
	      monthNames        : Date.upMonthNames,
	      dayNames          : Date.dayNames,
	      nextText          : '下月 ',
	      prevText          : '上月 ',
	      monthYearText     : '选择一个月 ',
	      todayTip          : "{0} ",
	      format            : "Y-m-d H:i",
	      okText            : "确定",
	      cancelText        : "取消"
	   });
}
if(Ext.form.DateTimeField){
	   Ext.apply(Ext.form.DateTimeField.prototype, {
	      disabledDaysText  : "禁用",
	      disabledDatesText : "禁用",
	      minText           : "该输入项的日期必须在 {0} 之后",
	      maxText           : "该输入项的日期必须在 {0} 之前",
	      invalidText       : "{0} 是无效的日期 - 必须符合格式： {1}",
	      format            : "Y-m-d H:i",
	      altFormats : "Y-m-d|y-m-d|Y-n-j|y-n-j|Ymd|ymd|Y.m.d|y.m.d|Y.n.j|y.n.j|Y/m/d|y/m/d|Y/n/j|y/n/j|Y-m-d H:i:s"
	   });
}

if(Ext.form.TimeField){
	Ext.apply(Ext.form.TimeField.prototype, {
	format:'H:i',
	minText : "该输入项的时间必须大于或等于： {0}",
	maxText : "该输入项的时间必须小于或等于： {0}",
	invalidText : "{0}不是有效的时间"
});
}
if(Ext.Button){
	Ext.apply(Ext.Button.prototype, {
		tooltipType  :'title'
	});
}