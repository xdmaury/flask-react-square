from flask import Blueprint, jsonify
from controllers.square_controller import SquareController

square_bp = Blueprint('square', __name__, url_prefix='/square')

@square_bp.route('/<string:number>', methods=['GET'])
def square(number):
    try:
        number = int(number)
        result = SquareController.calculate_square(number)
        return jsonify({'result': result}), 200
    
    except ValueError:
        return jsonify({'error': 'Invalid number'}), 400