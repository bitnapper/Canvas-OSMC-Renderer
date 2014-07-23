/**
 *
 * OSMCSymbol object draws an OSMC-Symblol
 *
 * wegfarbe :hintergrund :vordergrund :vordergrund2 :text:textfarbe
 *
 * Autor: Thorsten Alge <mail@thorsten-alge.de>
 * Date:  2013-09-06
 *
 */
var OSMCSymbol = function( id, size, str ) {
	this.id = id;
	this.size = size;
	this.osmc = str.split( ':' );
	this.defaultLineWidth = size/12;
	this.ctx = null;
}

OSMCSymbol.prototype = {
	getOSMCString: function() {
		return( this.osmc.join( ':' ) );
	},

	getWayColor: function() {
		if( osmc.length >= 1 ) {
			return( osmc[0] );
		} else {
			return( 'incorrect osmc-string' );
		}
	},

	drawOSMCSymbol: function() {
		// check wether enough osmc-symbol information are given or not
		if( this.osmc.length < 2 ) {
			console.log("Error: No valid symbol description");
			return;
		}

		var c    = document.getElementById( this.id );
		this.ctx = c.getContext( '2d' );

		switch( this.osmc[1] ) {
			case 'black':
			case 'blue':
			case 'brown':
			case 'green':
			case 'orange':
			case 'purple':
			case 'red':
			case 'white':
				this._drawBackgroundColour( this.osmc[1] );
				break;
			case 'black_circle':
			case 'blue_circle':
			case 'red_circle':
				this._drawBackgroundCircle( 'white', this.osmc[1].split( '_' )[0] );
				break;
			case 'yellow_circle':
			case 'white_circle':
				this._drawBackgroundCircle( 'black', this.osmc[1].split( '_' )[0] );
				break;
			case 'blue_frame':
			case 'green_frame':
			case 'red_frame':
			case 'yellow_frame':
				this._drawBackgroundFrame( this.osmc[1].split( '_' )[0] );
				break;
			case 'blue_round':
			case 'green_round':
			case 'red_round':
			case 'white_round':
				this._drawBackgroundRound( this.osmc[1].split( '_' )[0] );
				break;
			default:
				console.log( 'Undefined background description: "' + this.osmc[1] + '"' );
		}

		// check if first foreground is set
		if( this.osmc.length < 3 ) {
			console.log("Error: No valid foreground description");
			return;
		}
		this._drawSymbol( this.osmc[2] );

		// check if secound foreground is set
		if( this.osmc.length < 4 ) {
			console.log("Error: No valid foreground description");
			return;
		}
		this._drawSymbol( this.osmc[3] );
	},
	
	_drawSymbol: function( pSymbol ) {

		switch( pSymbol ) {
			case 'ammonit':
			case 'black_arch':
				this._STILLMISSING();
				break;
			case 'black_bar':
				this._drawBar( pSymbol.split( '_' )[0] );
				break;
			case 'black_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'black_crest':
				this._STILLMISSING();
				break;
			case 'black_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'black_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'black_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'black_fork':
			case 'black_horse':
			case 'black_pointer':
				this._STILLMISSING();
				break;
			case 'black_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'black_rectangle_line':
			case 'black_red_diamond':
				this._STILLMISSING();
				break;
			case 'black_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'black_triangle_line':
				this._STILLMISSING();
				break;
			case 'black_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'blue_L':
				this._drawL( pSymbol.split( '_')[0] );
				break;
			case 'blue_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'blue_bowl':
				break;
			case 'black_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'blue_L':
				this._drawL( pSymbol.split( '_')[0] );
				break;
			case 'blue_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'blue_bowl':
				this._STILLMISSING();
				break;
			case 'blue_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'blue_corner':
				this._drawCorner( pSymbol.split( '_')[0] );
				break;
			case 'blue_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'blue_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'blue_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'blue_fork':
				this._STILLMISSING();
				break;
			case 'blue_lower':
				this._drawLower( pSymbol.split( '_' )[0] );
				break;
			case 'blue_pointer':
				this._STILLMISSING();
				break;
			case 'blue_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'blue_slash':
				this._drawSlash( pSymbol.split( '_' )[0] );
				break;
			case 'blue_stripe':
				this._drawStripe( pSymbol.split( '_')[0] );
				break;
			case 'blue_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'blue_triangle_turned':
				this._drawTriangleTurned( pSymbol.split( '_' )[0] );
				break;
			case 'blue_turned_T':
				this._drawTurnedT( pSymbol.split( '_' )[0] );
				break;
			case 'blue_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'bridleway':
				this._STILLMISSING();
				break;
			case 'green_L':
				this._drawL( pSymbol.split( '_')[0] );
				break;
			case 'green_backslash':
				this._drawBackslash( pSymbol.split( '_' )[0] );
				break;
			case 'green_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'green_bowl':
				this._STILLMISSING();
				break;
			case 'green_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'green_corner':
				this._drawCorner( pSymbol.split( '_')[0] );
				break;
			case 'green_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'green_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'green_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'green_drop_line':
			case 'green_fork':
			case 'green_horse':
				this._STILLMISSING();
				break;
			case 'green_lower':
				this._drawLower( pSymbol.split( '_' )[0] );
				break;
			case 'green_pointer':
				this._STILLMISSING();
				break;
			case 'green_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'green_slash':
				this._drawSlash( pSymbol.split( '_' )[0] );
				break;
			case 'green_stripe':
				this._drawStripe( pSymbol.split( '_')[0] );
				break;
			case 'green_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'green_triangle_line':
				this._STILLMISSING();
				break;
			case 'green_triangle_turned':
				this._drawTriangleTurned( pSymbol.split( '_' )[0] );
				break;
			case 'green_turned_T':
				this._drawTurnedT( pSymbol.split( '_' )[0] );
				break;
			case 'green_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'heart':
			case 'hiker':
			case 'mine':
				this._STILLMISSING();
				break;
			case 'orange_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'orange_diamond_line':
				this._drawDiamondLine( pSymbol.split( '_' )[0] );
				break;
			case 'orange_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'red_L':
				this._drawL( pSymbol.split( '_')[0] );
				break;
			case 'red_arch':
			case 'red_backslash':
				this._drawBackslash( pSymbol.split( '_' )[0] );
				break;
			case 'red_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'red_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'red_corner':
				this._drawCorner( pSymbol.split( '_')[0] );
				break;
			case 'red_crest':
				this._STILLMISSING();
				break;
			case 'red_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'red_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'red_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'red_drop':
			case 'red_drop_line':
			case 'red_fork':
				this._STILLMISSING();
				break;
			case 'red_lower':
				this._drawLower( pSymbol.split( '_' )[0] );
				break;
			case 'red_pointer':
				this._STILLMISSING();
				break;
			case 'red_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'red_slash':
				this._drawSlash( pSymbol.split( '_' )[0] );
				break;
			case 'red_stripe':
				this._drawStripe( pSymbol.split( '_')[0] );
				break;
			case 'red_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'red_triangle_turned':
				this._drawTriangleTurned( pSymbol.split( '_' )[0] );
				break;
			case 'red_turned_T':
				this._drawTurnedT( pSymbol.split( '_' )[0] );
				break;
			case 'red_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'shell':
			case 'shell_modern':
			case 'tower':
			case 'white_arch':
				this._STILLMISSING();
				break;
			case 'white_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'white_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'white_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'white_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'white_diamond_line':
				this._drawDiamondLine( pSymbol.split( '_' )[0] );
				break;
			case 'white_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'white_hiker':
				this._STILLMISSING();
				break;
			case 'white_lower':
				this._drawLower( pSymbol.split( '_' )[0] );
				break;
			case 'white_pointer':
				this._STILLMISSING();
				break;
			case 'white_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'white_rectangle_line':
			case 'white_red_diamond':
				this._STILLMISSING();
				break;
			case 'white_stripe':
				this._drawStripe( pSymbol.split( '_')[0] );
				break;
			case 'white_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'white_triangle_line':
				this._STILLMISSING();
				break;
			case 'white_turned_T':
				this._drawTurnedT( pSymbol.split( '_' )[0] );
				break;
			case 'white_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			case 'wolfshook':
				this._STILLMISSING();
				break;
			case 'yellow_L':
				this._drawL( pSymbol.split( '_')[0] );
				break;
			case 'yellow_backslash':
				this._drawBackslash( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_bar':
				this._drawBar( pSymbol.split( '_')[0] );
				break;
			case 'yellow_bowl':
				this._STILLMISSING();
				break;
			case 'yellow_circle':
				this._drawCircle( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_corner':
				this._drawCorner( pSymbol.split( '_')[0] );
				break;
			case 'yellow_cross':
				this._drawCross( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_diamond':
				this._drawDiamond( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_dot':
				this._drawDot( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_fork':
				this._STILLMISSING();
				break;
			case 'yellow_lower':
				this._drawLower( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_pointer':
				this._STILLMISSING();
				break;
			case 'yellow_rectangle':
				this._drawRectangle( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_rectangle_line':
				this._STILLMISSING();
				break;
			case 'yellow_slash':
				this._drawSlash( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_stripe':
				this._drawStripe( pSymbol.split( '_')[0] );
				break;
			case 'yellow_triangle':
				this._drawTriangle( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_turned_T':
				this._drawTurnedT( pSymbol.split( '_' )[0] );
				break;
			case 'yellow_x':
				this._drawX( pSymbol.split( '_')[0] );
				break;
			default:
				console.log( 'Undefined foreground description: "' + pSymbol + '"' );
		}
	},

	_STILLMISSING: function() {
		console.log( 'Not yet implemented: \'' + pSymbol + '\'' );
	},

	_drawBackgroundColour: function( colour ) {
			this.ctx.fillStyle = colour;
			this.ctx.fillRect( 0, 0, this.size, this.size );
	},

	_drawBackgroundCircle: function( fillColour, strokeColour ) {
			this.ctx.lineWidth   = this.defaultLineWidth;
			this.ctx.fillStyle   = fillColour;
			this.ctx.strokeStyle = strokeColour;
			this.ctx.beginPath();
			this.ctx.arc( this.size/2, this.size/2, this.size/2.2, 0, 2*Math.PI );
			this.ctx.stroke();
			this.ctx.fill();
			this.ctx.strokeStyle = "none"; // resetting
	},

	_drawBackgroundFrame: function( colour ) {
			this.ctx.beginPath();
			this.ctx.rect(
				this.defaultLineWidth/2,
				this.defaultLineWidth/2,
				this.size-this.defaultLineWidth,
				this.size-this.defaultLineWidth
			);

			this.ctx.lineWidth = this.defaultLineWidth;
			this.ctx.strokeStyle = colour;
			this.ctx.fillStyle   = "white";
			this.ctx.stroke();
			this.ctx.fill();
			this.ctx.strokeStyle = "none"; // resetting
	},
	
	_drawBackgroundRound: function( colour ) {
			this.ctx.beginPath();
			this.ctx.arc(
				this.size/2,   // x
				this.size/2,   // y
				this.size/2.2, // radius
				0,             // direction
				2*Math.PI
			);

			this.ctx.fillStyle = colour;
			this.ctx.fill();

	},

	_drawBackslash: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( 0, 0);
		this.ctx.moveTo( this.size, (this.size/4)*3 );
		this.ctx.lineTo( this.size, this.size );
		this.ctx.lineTo( 0, this.size/4 );
		this.ctx.lineTo( 0, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawBar: function( colour ) {
		this.ctx.rect( 0, this.size/3, this.size, this.size/3 );
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawCircle: function( colour ) {
		this.ctx.beginPath();
		this.ctx.arc(
			this.size/2,   // x
			this.size/2,   // y
			this.size/3,   // radius
			0,             // direction
			2*Math.PI
		);

		this.ctx.lineWidth = this.defaultLineWidth;
		this.ctx.strokeStyle = colour;
		this.ctx.stroke();
	},

	_drawCorner: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( 0, 0 );
		this.ctx.lineTo( this.size, 0 );
		this.ctx.lineTo( this.size, this.size );
		this.ctx.moveTo( 0, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
		this.ctx.lineTo( this.size/2, (this.size/4)*3 );
		this.ctx.lineTo( this.size/2, (this.size/4)*3 );
		this.ctx.lineTo( this.size/4, this.size/2 );
		this.ctx.lineTo( this.size/2, this.size/4 );
		this.ctx.closePath();
		this.ctx.lineWidth = this.defaultLineWidth;
		this.ctx.strokeStyle = colour;
		this.ctx.stroke();
	},

	_drawDiamond: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( this.size/2, this.size/8 );
		this.ctx.lineTo( (this.size/8)*7, this.size/2 );
		this.ctx.lineTo( this.size/2, (this.size/8)*7 );
		this.ctx.lineTo( this.size/8, this.size/2 );
		this.ctx.lineTo( this.size/2, this.size/8 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawDot: function( colour ) {
		this.ctx.beginPath();
		this.ctx.arc(
			this.size/2,   // x
			this.size/2,   // y
			this.size/3,   // radius
			0,             // direction
			2*Math.PI
		);

		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawL: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( (this.size/8)*3, 0 );
		this.ctx.lineTo( (this.size/8)*3, (this.size/8)*5 );
		this.ctx.lineTo( this.size , (this.size/8)*5 );
		this.ctx.lineTo( this.size,  (this.size/8)*3 );
		this.ctx.lineTo( (this.size/8)*5, (this.size/8)*3 );
		this.ctx.lineTo( (this.size/8)*5, 0 );
		this.ctx.lineTo( (this.size/8)*3, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawLower: function( colour ) {
		this.ctx.rect( this.size/3, this.size/3, this.size/3, this.size/3 );
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawRectangle: function( colour ) {
		this.ctx.rect( this.size/4, this.size/4, this.size/2, this.size/2 );
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawSlash: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( this.size, 0 );
		this.ctx.lineTo( 0, (this.size/4)*3 );
		this.ctx.lineTo( 0, this.size );
		this.ctx.lineTo( this.size, this.size/4 );
		this.ctx.lineTo( this.size, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawStripe: function( colour ) {
		this.ctx.rect( this.size/3, 0, this.size/3, this.size );
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawTriangle: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( this.size/2, 0 );
		this.ctx.lineTo( this.size, this.size );
		this.ctx.lineTo( 0, this.size );
		this.ctx.lineTo( this.size/2, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawTriangleTurned: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( 0, 0 );
		this.ctx.lineTo( this.size, 0 );
		this.ctx.lineTo( this.size/2, this.size );
		this.ctx.lineTo( 0, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawTurnedT: function( colour ) {
		this.ctx.beginPath();
		this.ctx.moveTo( (this.size/8)*3, 0 );
		this.ctx.lineTo( (this.size/8)*3, (this.size/8)*6 );
		this.ctx.lineTo( 0, (this.size/8)*6 );
		this.ctx.lineTo( 0, this.size );
		this.ctx.lineTo( this.size, this.size );
		this.ctx.lineTo( this.size, (this.size/8)*6 );
		this.ctx.lineTo( (this.size/8)*5, (this.size/8)*6 );
		this.ctx.lineTo( (this.size/8)*5, 0 );
		this.ctx.lineTo( (this.size/8)*3, 0 );
		this.ctx.closePath();
		this.ctx.fillStyle = colour;
		this.ctx.fill();
	},

	_drawX: function( colour ) {
		this._drawSlash( colour );
		this._drawBackslash( colour );
	}
}

/*
function start() {
	var x = new Array(
		'white:white:red_cross:blue_slash',
		'white:white:red_cross',
		'white:white:red_turned_T',
		'white:white:orange_diamond_line',
		'white:white:blue_x',
		'white:white:red_backslash',
		'white:white:blue_slash',
		'white:white:blue_triangle_turned',
		'white:white:red_triangle',
		'white:white:red_rectangle',
		'white:white:red_circle',
		'white:white:red_dot',
		'white:white:red_diamond',
		'white:white:red_corner',
		'white:white:red_L',
		'white:black:blue_bar',
		'white:purple:blue_stripe',
		'white:red_circle:black_cross'
	);

	$.each( x, function( i ) {
		$( '#divContent' )
			.append( '<canvas id="cnv' + i + '" width="96" height="96" style="border:1px solid black;"></canvas><hr/>' );
		var osmc = new OSMCSymbol( 'cnv' + i, 96, x[i] );
		osmc.drawOSMCSymbol();
	});
}
*/
