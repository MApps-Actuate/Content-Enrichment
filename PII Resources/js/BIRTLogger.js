/**
 * Logger
 *  	In the designer, log entries shows up in the designer's "Error Log" tab
 *  	In the MBIR server, log entries shows up in the JServer or JFactory Server log
 */
gLogger = new BIRTLogger();
function BIRTLogger() {
	this.separator = "|";											// Entry separator
	this.logger = null;												// holds logger instance
	
	this.requestId = null;
	this.reportName = null;
	this.userName = null;
	this.designerMode = false;										// Designer has warning log level, so all messages need to be logged at warning
	this.logId = null;
	this.initialized = false;
	
	this.initialize = function() {
		var serverContext = reportContext.getAppContext().get("ServerContext");
		var sessionInfo = reportContext.getAppContext().get("JREMSessionInfo");

		// Get the user name
		if (serverContext != null) {
			this.userName = serverContext.getUserName();
			if (this.userName == null || this.userName == "" || this.userName == "anonymous") {
				this.designerMode = true;
			}
		}
		// Collect other information
		if (sessionInfo != null) {
			this.requestId = sessionInfo.getRequestId();
			soapRequestId = sessionInfo.getSoapRequestId();
			archiveFileId = sessionInfo.getArchiveFileId();
		}
		this.initializeLogger();
		this.initialized = true;
	}
	// Getters and Setters
	this.setReportName = function(reportName) {
		this.reportName = reportName;
	}
	this.setRequestId = function(requestId) {
		this.requestId = requestId;
	}
	this.setSeparator = function(separator) {
		this.separator = separator;
	}
	
	/*
	 * Initialize the default logger
	 */
	this.initializeLogger = function() {
		this.logger = java.util.logging.Logger.getLogger("birt.report.logger");
	}
	
	this.getLogId = function() {
		if (this.logId == null) {
			this.logId = this.reportName + this.separator 
					+ this.requestId + this.separator
					+ this.soapRequestId + this.separator;
		} 
		return this.logId;
	}
	/*
	 * Log at debug level
	 */
	this.debug = function(message) {
		if (this.initialized == false) {
			this.initialize();
		}
		if (this.designerMode == true) {
			this.warning(message);
		} else {
			this.logger.fine(this.getLogId() + message);
		}
	}
	
	/*
	 * Log at info level
	 */
	this.info = function(message) {
		if (this.initialized == false) {
			this.initialize();
		}
		if (this.designerMode == true) {
			this.warning(message);
		} else {
			this.logger.info(this.getLogId() + message);
		}
	}
	
	/*
	 * Log at warning level
	 */
	this.warning = function(message) {
		if (this.initialized == false) {
			this.initialize();
		}
		this.logger.warning(this.getLogId() + message);
	}
	/*
	 * Log at error level
	 */
	this.severe = function(message) {
		if (this.initialized == false) {
			this.initialize();
		}
		this.logger.severe(this.getLogId() + message);
	}
	/*
	 * Log at error level
	 */
	this.error = function(message) {
		this.severe(message);
	}
}
	