import Proxy from '../../models/Proxy.js';
import { sendSuccessResponse, sendErrorResponse } from '../../utils/Helpers.js';

class ProxyController {
    // Method to list all proxies
    async list(req, res) {
        try {
            const proxies = await Proxy.query();
            sendSuccessResponse(res, 'Proxies retrieved successfully', proxies);
        } catch (error) {
            sendErrorResponse(res, 500, error.message);
        }
    }

    // Method to get a single proxy by its ID
    async getById(req, res) {
        try {
            const proxy = await Proxy.findById(req.params.id);
            if (!proxy) {
                sendErrorResponse(res, 'Proxy not found', 404);
                return;
            }
            sendSuccessResponse(res, 'Proxy found', proxy);
        } catch (error) {
            sendErrorResponse(res, 500, error.message);
        }
    }

    // Method to create a new proxy
    async create(req, res) {
        try {
            const newProxy = await Proxy.create(req.body);
            sendSuccessResponse(res, 'Proxy created successfully', newProxy);
        } catch (error) {
            sendErrorResponse(res, 500, error.message);
        }
    }

    // Method to update an existing proxy
    async update(req, res) {
        try {
            const updatedProxy = await Proxy.updateById(req.params.id, req.body);
            if (!updatedProxy) {
                sendErrorResponse(res, 404, 'Proxy not found');
                return;
            }
            sendSuccessResponse(res, 'Proxy updated successfully', updatedProxy);
        } catch (error) {
            sendErrorResponse(res, 404, error.message);
        }
    }

    // Method to delete a proxy
    async delete(req, res) {
        try {
            const success = await Proxy.deleteById(req.params.id);
            if (!success) {
                sendErrorResponse(res, 404, 'Proxy not found');
                return;
            }
            sendSuccessResponse(res, 'Proxy deleted successfully');
        } catch (error) {
            sendErrorResponse(res, 500, error.message);
        }
    }
}

export default new ProxyController();
