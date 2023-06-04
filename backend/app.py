from flask import Flask, jsonify
from flask_cors import CORS
from routes.square_route import square_bp

app = Flask(__name__)

CORS(app)

@app.errorhandler(404)
def page_not_found(error):
    return jsonify({'error': 'Rota não encontrada'}), 404

app.register_blueprint(square_bp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
