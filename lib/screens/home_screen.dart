import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Hola'),
          elevation: 10.00,
        ),
        backgroundColor: Colors.green,
        body: const Center(child: Text("HOLA PRECIOSO")));
  }
}
